# Zi Wei Vision Board — editable source

These are the original, editable files for the Vision Board design.

## Files
- **Vision Board.dc.html** — the design itself: layout/markup + all logic. This is the file you edit.
- **support.js** — the runtime that makes the file render. Do not edit; just keep it alongside.
- **pi-digits.js** — the π digits data used by the charts. Do not edit.

## How to run
Open `Vision Board.dc.html` in any modern browser (double-click). All three files
must sit in the same folder. An internet connection is needed the first time so the
Google Fonts (Cormorant Garamond + Inter) can load.

## How to edit
Edit `Vision Board.dc.html`:
- The **markup** (what you see) is the HTML between `<x-dc>` and `</x-dc>`.
- The **logic** (behavior, the 12 palaces data, interactions) is in the
  `<script data-dc-script>` block — the `class Component extends DCLogic { ... }`.

Changing the 12 palace names/descriptions: search for `this.palaces = [` in the
logic block — each palace has a `name`, `theme` (the description line), and `gloss`.

## Publishing to GitHub Pages
For a no-setup site, use the separate single-file **index.html** (the bundled
version) instead of these source files — it has everything inlined and just works.
These source files are for ongoing editing/development.
