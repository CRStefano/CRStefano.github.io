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
| Blog (ora rimanda a Substack)    | `_pages/blog.md`                                                                                                                          |
| Colori, font, spaziature, sfondo | `_sass/_stefano.scss` (variabili in cima al file)                                                                                         |
| Foto profilo                     | `assets/img/stefano.jpg` (ora è un segnaposto ritagliato da uno screenshot: sostituiscila con la versione HD, anche più grande, quadrata) |
| Nome, dominio, font caricati     | `_config.yml`                                                                                                                             |

## File nuovi o sostituiti

- `_layouts/default.liquid` (sostituito: aggiunge gli strati di sfondo), `home.liquid`, `works.liquid`, `contact.liquid` (nuovi)
- `_includes/header.liquid` (sostituito: 4 voci sempre in fila + interruttore; il menu del tema sul telefono
  si nascondeva con regole `!important` che il CSS del sito non può battere)
- `assets/css/main.scss` (copia del tema + una riga che carica `_stefano.scss`)
- `assets/js/theme.js` (copia del tema con interruttore a **due** stati, chiaro/scuro)
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
