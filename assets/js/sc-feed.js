/*
 * Ricerca e filtri per le pagine Articles e Blog (Stefano Coelati Rama).
 *
 * - Lente: ricerca testuale su titolo, sommario e tag (anche con i sinonimi
 *   di _data/tags.yml, es. "geopolitica" trova "Geopolitics"). Ogni parola
 *   cercata deve comparire da qualche parte; i risultati sono ordinati per
 *   pertinenza: titolo > tag > sommario, poi dal piu' recente.
 * - Tag: cliccando un'etichetta (sopra l'elenco o sotto un articolo) si
 *   tengono solo i pezzi che hanno TUTTE le etichette selezionate.
 * - Scrivere "#logic" nella ricerca equivale a cliccare il tag Logic.
 * - Ricerca e tag finiscono nell'indirizzo (?q=...&tags=...): un link cosi'
 *   si puo' condividere e riapre la stessa selezione.
 * Senza JavaScript l'elenco resta completo, ordinato per data e cliccabile.
 */
(function () {
  "use strict";

  // minuscole, senza accenti, spazi compattati
  function norm(s) {
    return (s || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\s+/g, " ")
      .trim();
  }

  function escapeHtml(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function escapeRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // punteggio di una parola dentro un testo: inizio di parola vale piu' di una parte di parola
  function scoreIn(text, term, wordStart, inside) {
    var i = text.indexOf(term);
    if (i < 0) return 0;
    var re = new RegExp("(^|[^a-z0-9])" + escapeRe(term));
    return re.test(text) ? wordStart : inside;
  }

  // evidenzia le parole cercate (lavora sul testo originale, quindi e' sicuro)
  function highlight(original, terms) {
    if (!terms.length) return escapeHtml(original);
    // mappa carattere per carattere tra testo originale e testo normalizzato
    var folded = "";
    var map = [];
    for (var i = 0; i < original.length; i++) {
      var f = original[i].toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
      for (var j = 0; j < f.length; j++) {
        folded += f[j];
        map.push(i);
      }
    }
    var marks = new Array(original.length).fill(false);
    terms.forEach(function (t) {
      var from = 0;
      var k;
      while (t && (k = folded.indexOf(t, from)) >= 0) {
        for (var m = k; m < k + t.length; m++) marks[map[m]] = true;
        from = k + t.length;
      }
    });
    var out = "";
    var open = false;
    for (var n = 0; n < original.length; n++) {
      if (marks[n] && !open) {
        out += '<mark class="hl">';
        open = true;
      }
      if (!marks[n] && open) {
        out += "</mark>";
        open = false;
      }
      out += escapeHtml(original[n]);
    }
    if (open) out += "</mark>";
    return out;
  }

  function setup(root) {
    var list = root.querySelector(".feed-list");
    if (!list) return;
    var input = root.querySelector(".feed-q");
    var clearBtn = root.querySelector(".feed-clear");
    var status = root.querySelector(".feed-status");
    var empty = root.querySelector(".feed-empty");
    var label = root.getAttribute("data-label") || "items";
    var selected = new Set();

    var items = Array.prototype.map.call(list.querySelectorAll(".feed-item"), function (li, idx) {
      var titleEl = li.querySelector(".feed-title a");
      var sumEl = li.querySelector(".feed-summary");
      return {
        el: li,
        idx: idx, // posizione originale = ordine per data
        titleEl: titleEl,
        sumEl: sumEl,
        titleRaw: titleEl ? titleEl.textContent : "",
        sumRaw: sumEl ? sumEl.textContent : "",
        title: norm(titleEl ? titleEl.textContent : ""),
        summary: norm(sumEl ? sumEl.textContent : ""),
        tagtext: norm(li.getAttribute("data-tagtext")),
        tags: (li.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean),
      };
    });
    var total = items.length;

    // tag noti (id e nomi), per riconoscere "#tag" nella ricerca
    var knownTags = {};
    root.querySelectorAll(".feed-tools .tag-chip[data-tag]").forEach(function (b) {
      var id = b.getAttribute("data-tag");
      knownTags[id] = id;
      knownTags[norm(b.firstChild ? b.firstChild.textContent : id)] = id;
    });

    function parseQuery() {
      var raw = norm(input.value);
      var terms = [];
      var hashTags = [];
      raw
        .split(" ")
        .filter(Boolean)
        .forEach(function (w) {
          if (w[0] === "#" && w.length > 1) {
            var id = knownTags[w.slice(1)];
            if (id) hashTags.push(id);
            else terms.push(w.slice(1));
          } else {
            terms.push(w.replace(/^["']+|["',.;:!?]+$/g, ""));
          }
        });
      return {
        raw: raw,
        terms: terms.filter(Boolean),
        hashTags: hashTags,
      };
    }

    function score(it, q) {
      var total = 0;
      for (var i = 0; i < q.terms.length; i++) {
        var t = q.terms[i];
        var s = scoreIn(it.title, t, 6, 3) + scoreIn(it.tagtext, t, 5, 2) + scoreIn(it.summary, t, 2, 1);
        if (!s) return 0; // ogni parola deve trovarsi da qualche parte
        total += s;
      }
      // bonus se l'intera frase compare nel titolo
      if (q.terms.length > 1 && it.title.indexOf(q.terms.join(" ")) >= 0) total += 4;
      return total;
    }

    function syncChips() {
      root.querySelectorAll(".tag-chip[data-tag]").forEach(function (b) {
        b.setAttribute("aria-pressed", selected.has(b.getAttribute("data-tag")) ? "true" : "false");
      });
    }

    function syncUrl(q) {
      try {
        var params = new URLSearchParams(window.location.search);
        if (input.value.trim()) params.set("q", input.value.trim());
        else params.delete("q");
        if (selected.size) params.set("tags", Array.from(selected).join(","));
        else params.delete("tags");
        var qs = params.toString();
        history.replaceState(null, "", window.location.pathname + (qs ? "?" + qs : "") + window.location.hash);
      } catch (e) {}
    }

    function render() {
      var q = parseQuery();
      var need = new Set(selected);
      q.hashTags.forEach(function (t) {
        need.add(t);
      });

      var shown = [];
      items.forEach(function (it) {
        var ok = true;
        need.forEach(function (t) {
          if (it.tags.indexOf(t) < 0) ok = false;
        });
        var s = ok ? (q.terms.length ? score(it, q) : 1) : 0;
        it.score = s;
        it.el.hidden = !s;
        if (s) shown.push(it);
        if (it.titleEl) it.titleEl.innerHTML = highlight(it.titleRaw, s ? q.terms : []);
        if (it.sumEl) it.sumEl.innerHTML = highlight(it.sumRaw, s ? q.terms : []);
      });

      // ordine: pertinenza (solo se c'e' una ricerca), poi data
      var ordered = items.slice().sort(function (a, b) {
        if (q.terms.length && b.score !== a.score) return b.score - a.score;
        return a.idx - b.idx;
      });
      ordered.forEach(function (it) {
        list.appendChild(it.el);
      });

      var filtering = q.terms.length || need.size;
      if (status) {
        status.textContent = filtering
          ? shown.length + " of " + total + " " + label + (q.terms.length ? ", most relevant first" : "")
          : total + " " + label + ", newest first";
      }
      if (empty) empty.hidden = shown.length > 0;
      if (clearBtn) clearBtn.hidden = !filtering;
      syncChips();
      syncUrl(q);
    }

    var timer;
    input.addEventListener("input", function () {
      clearTimeout(timer);
      timer = setTimeout(render, 80);
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        input.value = "";
        render();
      }
    });

    root.addEventListener("click", function (e) {
      var chip = e.target.closest(".tag-chip[data-tag]");
      if (chip && root.contains(chip)) {
        var id = chip.getAttribute("data-tag");
        if (selected.has(id)) selected.delete(id);
        else selected.add(id);
        render();
        // da un'etichetta sotto un articolo: torna su, ai filtri
        if (!chip.closest(".feed-tools")) {
          var tools = root.querySelector(".feed-tools");
          if (tools && tools.getBoundingClientRect().top < 0) tools.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", function () {
        input.value = "";
        selected.clear();
        render();
        input.focus();
      });
    }

    // stato iniziale dall'indirizzo (?q=...&tags=a,b)
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get("q")) input.value = params.get("q");
      (params.get("tags") || "")
        .split(",")
        .filter(Boolean)
        .forEach(function (t) {
          if (knownTags[t]) selected.add(knownTags[t]);
        });
    } catch (e) {}
    render();
  }

  function init() {
    document.querySelectorAll("[data-feed]").forEach(setup);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
