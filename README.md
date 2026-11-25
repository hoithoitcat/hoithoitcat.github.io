# Ganghun Lee — academic personal website

An independently written static academic personal website, visually inspired by the publicly visible design of [Juho Lee's academic website](https://juho-lee.github.io/). The code is independently authored rather than copied from the professor's repository.

## Update GitHub Pages

1. Open your repository at https://github.com/hoithoitcat/hoithoitcat.github.io.
2. Upload **`index.html`, `styles.css`, and `README.md`** from this package to the repository **root**; overwrite the existing files with the same names.
3. Commit changes to `main`. The existing `app.js` and `data/` files from an earlier version are no longer used by this website, because all visible content is now written into `index.html`; you may safely remove those outdated files from this repo after checking they aren't needed elsewhere.
4. Ensure GitHub Pages is configured to deploy the `main` branch at `/(root)`.
5. Open https://hoithoitcat.github.io/ and hard refresh with Ctrl+Shift+R if the older design is cached.

## What has been fixed

- Publication details verified from the original May 2024 article, with live PDF / DOI / KCI links and a BibTeX button.
- About, Publications, Activities, and Contact have actual HTML content, so they **do not depend on ES module data imports**.
- Light/dark switching is wired into a small inline script. It works even when the previous `app.js` module fails or is absent; the theme is remembered in localStorage.
- The `Google Sans Flex` family is fetched via Google's CSS service. No font binaries are bundled or redistributed.

## Personal information / next steps

- The `GL` portrait is a placeholder. To replace it, upload your own photo to `assets/profile.jpg` and replace the placeholder `<div class="profile-photo profile-placeholder">` with `<img class="profile-photo" src="assets/profile.jpg" alt="Portrait of Gang Hun Lee">`.
- Email, Google Scholar profile, and CV links were not guessed or exposed because no confirmed public URLs or publication preference were provided.
- The KAIST SIML internship is marked **incoming** because it has not begun yet as of November 2026.
- The independently studied mathematical research is explicitly marked ongoing, not an established proof or a publication.
- A `BibTeX` button copies a verified bibliographic entry (browser clipboard permission required; otherwise a copy dialog appears).

## Sources for public publication metadata

- https://www.accesson.kr/pam/assets/pdf/42656/journal-31-2-189.pdf
- https://doi.org/10.7468/jksmeb.2024.31.2.189
- https://www.kci.go.kr/kciportal/landing/article.kci?arti_id=ART003081808
