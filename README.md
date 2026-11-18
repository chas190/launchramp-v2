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

The output is `dist-pages/`. It uses relative asset paths so it works at the repository's GitHub Pages URL. The Pages contact section embeds the Launch Ramp Inquiry Service web app. The service saves each submission to the Website Inquiries tab of the lead spreadsheet, then sends an email alert with the inquiry details. Update the public web app URL in `pages/main.tsx` if the service is replaced.

To publish, push this source to the `main` branch of a public GitHub repository. In the repository, choose **Settings → Pages → Source → GitHub Actions**. Under **Actions**, run **Deploy Launch Ramp to GitHub Pages** if it has not run successfully. The deployment job links to the public site.
