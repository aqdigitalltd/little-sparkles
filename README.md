# Little Sparkles Preschool — homepage redesign concept

A single-page redesign concept for Little Sparkles Preschool (Watford), built by AQ Digital to show how the preschool's homepage could look and feel.

> **This is not the official Little Sparkles Preschool website.** It is an unofficial design concept, not for production use. The official site is at <https://littlesparklespreschool.co.uk/>. Photography is placeholder imagery from Unsplash, and the page is marked `noindex, nofollow` so search engines do not list it.

## What's in it

Plain HTML, CSS and vanilla JavaScript — no build step, no dependencies. Only the homepage is built; the other navigation links are placeholders.

```
.
├── index.html          # The homepage
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Mobile menu, header shadow, scroll reveals
├── assets/
│   ├── favicon.svg
│   ├── favicon-32.png
│   ├── apple-touch-icon.png
│   └── images/         # Placeholder photography
├── .nojekyll           # Tells GitHub Pages to serve the files as-is
└── README.md
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Deploy to GitHub Pages

1. Push the repository to GitHub on the `main` branch.
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Choose branch **`main`** and folder **`/ (root)`**, then **Save**.
5. After a minute or so the site is live at `https://<username>.github.io/<repository>/`.

All asset paths are relative, so the page works from the repository subpath.
