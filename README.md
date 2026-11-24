# zdk.sh

Source of [zdk.sh](https://zdk.sh). It is an [Astro](https://astro.build) site with a home page, articles, projects and an RSS feed.

## Run

```
npm ci
npm run dev      # http://localhost:4321
npm run build    # static files in dist/
```

## Write

- Markdown post: add `src/content/articles/<slug>.md` with `title` and `date`.
- Hand-made HTML post: put it in `public/articles/`, then add a `.md` stub with `href: /articles/<file>.html`.
- Projects list: edit `src/pages/projects.astro`.

## Style

Every page loads `public/site.css`, including the hand-made posts.
The look follows [flaviocopes.com](https://flaviocopes.com): one column, Geist Mono, plain blue links.

## License

The code is MIT, see `LICENSE`.
Article text and images are © Di Warachet S., all rights reserved.
Geist Mono is under the SIL Open Font License, see `public/fonts/LICENSE.txt`.
