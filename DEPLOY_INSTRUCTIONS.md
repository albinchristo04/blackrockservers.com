# Deploying to Cloudflare Pages

## Prerequisites
1. Push your code to GitHub
2. Set up the database (see Database Setup below)

## Cloudflare Pages Setup

1. **Go to Cloudflare Dashboard** → **Workers & Pages** → **Create Application** → **Pages** → **Connect to Git**
2. **Select Repository**: `blackrockservers.com`
3. **Configure Build**:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `npm run pages:build`
   - **Build Output Directory**: `.vercel/output/static`

4. **Environment Variables** (Settings → Environment Variables):
   ```
   NOCIX_API_USER=50307_api
   NOCIX_API_TOKEN=6af0f8rzbzk7ldbr1s6mrpdql5wdylbn
   POSTGRES_URL=postgresql://postgres:1@Supergame@db.lcqliemvfouluxkfmpmp.supabase.co:5432/postgres
   ```

5. **Save and Deploy**

## Database Setup

Run the following SQL in your Supabase dashboard to create the servers table:

```sql
-- See schema.sql file for the complete setup
```

Or connect to your database and run:
```bash
psql "postgresql://postgres:1@Supergame@db.lcqliemvfouluxkfmpmp.supabase.co:5432/postgres" -f schema.sql
```

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` file (gitignored):
   ```
   NOCIX_API_USER=50307_api
   NOCIX_API_TOKEN=6af0f8rzbzk7ldbr1s6mrpdql5wdylbn
   POSTGRES_URL=postgresql://postgres:1@Supergame@db.lcqliemvfouluxkfmpmp.supabase.co:5432/postgres
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

## Notes

- The site will first try to fetch servers from the PostgreSQL database
- If the database is unavailable, it falls back to the Nocix API
- If both fail, it displays an empty state with a message
