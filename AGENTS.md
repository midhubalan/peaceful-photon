## Purpose

This is a personal knowledge base of how-to guides and deep dives, built with
[Starlight](https://starlight.astro.build) on Astro. It's written for the
author's future self and collaborators — not end users of a product — so
guides should be precise, dated where setup steps are version-sensitive, and
explicit about assumptions (OS, distro, tool versions).

Topics in scope include: toolchain setup, programming languages, development
environment configuration, AI harnesses and agent tooling, cloud platforms,
Kubernetes/infrastructure, and agile project management. When adding a new
topic area, create a new top-level sidebar group rather than forcing it into
an unrelated existing one.

## Authoring guides

- Guides live under `src/content/docs/guides/`; reference material under
  `src/content/docs/reference/`.
- Every page needs frontmatter with `title` and a one-sentence `description`
  (shown in search/sidebar previews).
- After adding a page, register it in the sidebar in `astro.config.mjs` —
  pages aren't auto-discovered unless their section uses `autogenerate`.
- Use `<Tabs>`/`<TabItem>` (`@astrojs/starlight/components`) for OS- or
  distro-specific steps, with a shared `syncKey` so the reader's choice
  persists across the page.
- Use Starlight asides (`:::note`, `:::caution`, `:::tip`) to call out
  details that are easy to miss (e.g. a naming collision, a gotcha specific
  to WSL) rather than burying them in prose.
- Prefer concrete, copy-pasteable commands with `title="..."` on code fences
  explaining what the command does, over abstract descriptions.
- Delete `src/content/docs/guides/example.md` and
  `src/content/docs/reference/example.md` once they're no longer useful as
  templates — don't let placeholder content linger.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
