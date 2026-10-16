# Sito di Stefano Coelati Rama — cosa è stato cambiato rispetto ad al-folio 1.2

Base: al-folio 1.2 (tema `al_folio_core 1.0.15`, che vive in una gem: qui ci sono solo
i file che lo **sovrascrivono**). Indirizzo: https://crstefano.github.io

## Dove si modifica cosa

| Cosa                             | File                                                                                                                                      |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Testo della Home (bio)           | `_pages/about.md`                                                                                                                         |
| Lavori (Projects, Work & Talks)  | `_data/works.yml` — un blocco per lavoro; senza `url` la voce non ha "HERE"                                                               |
| Education & Certification        | `_data/education.yml`                                                                                                                     |
| Mail, CV, social                 | `_data/contact.yml`                                                                                                                       |
| Articoli (pagina Articles)       | `_data/articles.yml` — titolo, data, link che scegli tu, riassunto, tag; l'ordine per data è automatico                                    |
| Blog (post del Substack)         | `_data/blog.yml` — stessa struttura, i link vanno ai post su Substack                                                                      |
| Tag e loro sinonimi per la ricerca | `_data/tags.yml` — elenco unico dei tag del sito (es. "geopolitica" trova "Geopolitics")                                                 |
| Saggio in fondo a Contact        | `_data/essay.yml`                                                                                                                         |
| Colori, font, spaziature, sfondo | `_sass/_stefano.scss` (variabili in cima; sezione 7 = posizioni del desktop copiate da Canva)                                              |
| Foto profilo                     | `assets/img/stefano.jpg` (ora è un segnaposto ritagliato da uno screenshot: sostituiscila con la versione HD, anche più grande, quadrata) |
| Nome, dominio, font caricati     | `_config.yml`                                                                                                                             |

## File nuovi o sostituiti

- `_layouts/default.liquid` (sostituito: strati di sfondo + calcolo dell'unità `--u` del layout Canva),
  `home.liquid`, `works.liquid`, `contact.liquid`, `feed.liquid` (nuovi)
- `_includes/header.liquid` (sostituito: menu su una riga come su Canva + interruttore), `_includes/sc-feed.liquid`
  (elenco di Articles/Blog), `assets/js/sc-feed.js` (lente di ricerca e filtri per tag)
- Layout desktop (da 861 px): ogni elemento è nella posizione esatta del file Canva (diapositiva 1200 × 674.671,
  ingrandita con la finestra fino a 1366 px). Sotto 861 px: layout a colonna per i telefoni.
- `assets/css/main.scss` (copia del tema + una riga che carica `_stefano.scss`)
- `assets/js/theme.js` (copia del tema con interruttore a **due** stati; ogni visita parte dal tema **chiaro**,
  la scelta vale finché la scheda resta aperta)
- `assets/img/bg/*.webp` (decorazioni e grana ricavate dai tuoi sfondi Canva), `assets/img/stefano.jpg`
- `_config.yml`: nome, url, font Oswald+Lora, ricerca/barra di avanzamento spente, pagine e collezioni
  del template **escluse** (`exclude:`), non cancellate: per riattivarne una basta toglierla dall'elenco.

## Pubblicare su GitHub Pages

1. Il repository deve chiamarsi `CRStefano.github.io`; il contenuto di questa cartella va nella radice, branch `main`.
2. Il workflow `.github/workflows/deploy.yml` a ogni push costruisce il sito e scrive il risultato sul branch `gh-pages`.
3. In _Settings → Pages_ scegli _Deploy from a branch_ → `gh-pages` / `(root)`.
4. Segui la build nella scheda _Actions_ → "Deploy site" (qualche minuto la prima volta).

## Cose da sapere

- Il sito è stato preparato **senza poter eseguire Jekyll** (l'ambiente di lavoro non raggiungeva rubygems.org).
  Layout, CSS e comportamento sono stati provati con un banco di prova che simula la build; la **prima build vera
  è quella di GitHub Actions**: se il log segnala un errore, la causa sarà quasi certamente in un solo file.
- Il passaggio PurgeCSS del deploy è stato simulato con la stessa configurazione: le pagine risultano identiche.
- Gli altri workflow del template (test, controllo link, prettier) possono segnalare errori dopo le modifiche:
  quello che conta per pubblicare è "Deploy site". Si possono disattivare dalla scheda _Actions_.
- Non c'è `CNAME`: il sito vive su `crstefano.github.io`. Se un giorno vorrai un dominio tuo, basta aggiungere
  il file e cambiare `url` in `_config.yml`.
