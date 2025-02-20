# Bettermarks Pro - Extensie

Bettermarks Pro is een Chrome-extensie die automatisch uitroeptekens verwijdert uit rekenopdrachten op Bettermarks.

## Functies

- Vervangt uitroeptekens (fa-triangle-exclamation) door willekeurige icoontjes:
  - 40% kans op "twoCoins"
  - 30% kans op "oneCoin"
  - 20% kans op "threeCoins"
  - 10% kans op "star"
- Werkt automatisch op `*.bettermarks.com`.
- Bevat een pop-up voor extra instellingen.

## Installatie

1. Download of clone deze repository.
2. Open Google Chrome en ga naar `chrome://extensions/`.
3. Schakel "Ontwikkelaarsmodus" in (rechtsboven).
4. Klik op "Uitgepakte extensie laden".
5. Selecteer de map waarin de extensiebestanden zich bevinden.

## Bestanden

- `manifest.json` - Configuratiebestand voor de extensie.
- `content.js` - JavaScript dat de uitroeptekens op Bettermarks aanpast.
- `popup.html` - HTML-bestand voor de extensiepop-up.
- `icon.png` - Extensie-icoon.

## Toekomstige verbeteringen

- Optie om keuzes te beheren via de popup.
- Ondersteuning voor extra stijlen en aanpassingen aan de website.
