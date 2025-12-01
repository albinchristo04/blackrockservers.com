# Deploying to Cloudflare Pages

1.  **Push to GitHub**: Ensure your latest code is pushed to your GitHub repository.
2.  **Cloudflare Dashboard**: Go to the Cloudflare Dashboard > **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3.  **Select Repository**: Choose `blackrockservers.com`.
4.  **Configure Build**:
    *   **Framework Preset**: Select **Next.js**.
    *   **Build Command**: `npm run pages:build`
    *   **Build Output Directory**: `.vercel/output/static`
5.  **Environment Variables**:
    *   Go to **Settings** > **Environment Variables** > **Add variable**.
    *   Add `NOCIX_API_USER` with your API user (e.g., `50307_api`).
    *   Add `NOCIX_API_TOKEN` with your API token.
    *   *Note*: For security, these are now required for the live site to fetch real data.
6.  **Save and Deploy**.

> [!NOTE]
> We are using `@cloudflare/next-on-pages` to ensure full compatibility with Next.js App Router on Cloudflare's Edge network.
