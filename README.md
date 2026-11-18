# Launch Ramp V2

This is an independent source snapshot of Launch Ramp. It includes the original marketing site and a separate static build for GitHub Pages.

## Develop locally

Use Node.js 24 and Bun.

```sh
bun install --frozen-lockfile
bun run dev
bun test
```

The TanStack Start app includes the original server-backed inquiry form. Configure a Supabase project and server-only credentials before enabling real submissions.

## Build and publish on GitHub Pages

```sh
bun run build:pages
```

The output is `dist-pages/`. It uses relative asset paths so it works at the repository's GitHub Pages URL. The Pages contact section embeds a published Google Form. Google Forms writes responses to its linked Google Sheet, and the sheet sends an immediate email notification for each new response. Update the public responder URL in `pages/main.tsx` if the form is replaced.

To publish, push this source to the `main` branch of a public GitHub repository. In the repository, choose **Settings → Pages → Source → GitHub Actions**. Under **Actions**, run **Deploy Launch Ramp to GitHub Pages** if it has not run successfully. The deployment job links to the public site.
