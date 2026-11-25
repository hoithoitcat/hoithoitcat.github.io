# Ganghun Lee academic homepage

An independently written static academic website inspired by the *layout* of https://juho-lee.github.io/ (November 2026). This does **not** copy its source code or the professor's assets.

## Set up GitHub Pages
1. Unzip this package.
2. Open https://github.com/hoithoitcat/hoithoitcat.github.io
3. Upload `index.html`, `styles.css`, `app.js`, `README.md`, and the whole `data` folder (keeping file paths as shown). **Do not upload the .zip itself**.
4. Commit to `main`, then Settings → Pages → Deploy from a branch → `main` → `/(root)` → Save.
5. Visit https://hoithoitcat.github.io/ after the Pages deployment completes.

## Editing
- `index.html` — page structure, navigation, contact links and profile photo placeholder.
- `styles.css` — colors, layout, type sizes, light/dark modes.
- `data/about.js` — biography, interests, education.
- `data/publications.js` — publication metadata.
- `data/activities.js` — internship and projects.
- `app.js` — page rendering and interactions.

## Fonts
The site requests the open-licensed **Google Sans** webfont through Google Fonts, with Helvetica/Arial as fallbacks. The professor's website specifically names **GoogleSansFlex_24pt-Regular.ttf** and **GoogleSansFlex_24pt-Light.ttf**, which are not bundled here. The CSS is prepared to use exactly those filenames if you place lawfully sourced copies in a new `fonts/` folder. If you do not, the site still works with the Google Fonts version of Google Sans. No font files are included in this package.

## Before sharing publicly
- Replace `GL` with your own portrait (or keep the initials).
- Confirm the exact publication title, author list, venue and paper link.
- Decide whether you want to publish the internship and independent project details.
- Add email/CV only if you wish to make them public.
