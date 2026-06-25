# Pi Zi Wei Vision Board

An interactive Zi Wei (Purple Star Astrology) vision board used the concept of Pi — a single-page web
experience built around the 12 palaces, with editable name/mantra fields,
animated backgrounds, palace detail views, and an A3 print/export layout.

## What's in this repo

```
vision-board/
├── index.html        ← standalone, self-contained build. Open or deploy this.
├── README.md
└── src/              ← editable source files
    ├── Vision Board.dc.html   ← the design: markup + logic (edit this)
    ├── support.js             ← runtime that renders the .dc.html (don't edit)
    └── pi-digits.js           ← π digits data used by the charts (don't edit)
```

## Quick start

**Just view it:** open `index.html` in any modern browser (double-click). Everything
is inlined into that one file — no server, no build step, works offline.

**Deploy it (GitHub Pages):** push this repo, enable Pages, and point it at the
root. `index.html` is the page that serves. Nothing else is required.

## Editing the design

Edit `src/Vision Board.dc.html`. It has two parts:

- **Markup** — the HTML between `<x-dc>` and `</x-dc>` (the layout you see).
- **Logic** — the `<script data-dc-script>` block at the bottom:
  `class Component extends DCLogic { ... }`. This holds the 12-palace data,
  interactions, and behavior.

To open the source while editing, keep all three files in `src/` together and
open `Vision Board.dc.html` in a browser — `support.js` renders it live. An
internet connection is needed the first time so Google Fonts (Cormorant Garamond
+ Inter) can load.

### Common edits

- **Palace names / descriptions:** search for `this.palaces = [` in the logic
  block. Each palace has a `name`, `theme` (the description line), and `gloss`.
- **Colors / type:** styles are inline in the markup. The palette centers on
  `#F8F5F0` (paper), `#1C1C1C` (ink), and `#C9A96E` (gold).

### Rebuilding the standalone file

After editing `src/Vision Board.dc.html`, re-bundle it into a fresh
self-contained `index.html` (inlines `support.js`, `pi-digits.js`, and fonts).
The current `index.html` was generated this way — regenerate it whenever you
change the source so the deployed page stays in sync.

## Notes

- The `.dc.html` format keeps markup and logic in one file; `support.js` is the
  small runtime that turns it into a live page. You don't need a toolchain to
  edit — a text editor and a browser are enough.
- The print/export view is laid out for **A3 landscape** (File → Print → Save
  as PDF).
