# Deploying to Cloudflare Pages

1.  **Push to GitHub**: Ensure your latest code is pushed to your GitHub repository.
2.  **Cloudflare Dashboard**: Go to the Cloudflare Dashboard > **Workers & Pages** > **Create Application** > **Pages** > **Connect to Git**.
3.  **Select Repository**: Choose `blackrockservers.com`.
4.  **Configure Build**:
    *   **Framework Preset**: Select **Next.js**.
    *   **Build Command**: `npm run pages:build` (This uses the `@cloudflare/next-on-pages` adapter we installed for better compatibility).
    *   **Build Output Directory**: `.vercel/output/static`
5.  **Environment Variables**:
    *   Add any necessary environment variables (e.g., API keys) in the **Environment Variables** section.
6.  **Save and Deploy**.

> [!NOTE]
> We are using `@cloudflare/next-on-pages` to ensure full compatibility with Next.js App Router on Cloudflare's Edge network.
