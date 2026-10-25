# The Muscular

My personal blog. Built with [Astro](https://astro.build), hosted free on GitHub Pages, written in [Pages CMS](https://pagescms.org).

## Writing a post

1. Go to [app.pagescms.org](https://app.pagescms.org) and sign in with GitHub.
2. Open this repository, then **Posts → Add an entry**.
3. Fill in the title, date and topic, then write the post. Use the image button in the editor to add photos.
4. Pick a **Cover illustration** and **Cover colour**, or leave both empty to get the topic's default. All the illustrations are on your site at `/covers/`.
5. Click **Save**. The site rebuilds by itself and the post is live in about a minute.

To save a post without publishing it, switch on **Draft**.

**Site settings** in Pages CMS changes the blog title, the intro, the bio and your social links.

## Running it on this computer

```bash
npm install
npm run dev
```

Then open http://localhost:4321. Drafts show locally but never on the live site.

## Adding a cover illustration

1. Draw it in `src/lib/doodles.mjs` (in the `doodles` object) and add its key to a group in `doodleGroups`.
2. Run `npm run cms-config` to refresh the dropdowns in Pages CMS.
3. Commit and push.

## How it fits together

| Part | Where |
| --- | --- |
| Posts (Markdown) | `src/content/posts/` |
| Site settings (title, bio, socials) | `src/data/site.json` |
| Cover illustrations, colours and topics | `src/lib/doodles.mjs` |
| Design | `src/styles/global.css` |
| Uploaded images | `public/images/` |
| Pages CMS config (generated) | `.pages.yml` |
| Deploys to GitHub Pages | `.github/workflows/deploy.yml` |
