# Deployment Checklist — Deep Thakkar Portfolio

## Prerequisites

- [ ] GitHub repo created and code pushed
- [ ] Vercel account created at https://vercel.com
- [ ] RapidAPI account and `linkedin-api8` subscription at https://rapidapi.com/rockapis-rockapis-default/api/linkedin-api8

## Step-by-Step Deployment

### 1. Push to GitHub

```bash
cd portfolio
git remote add origin https://github.com/imdeepthakkar/<your-repo-name>.git
git push -u origin main
```

### 2. Import Project in Vercel

1. Go to https://vercel.com/new
2. Click **"Import Git Repository"**
3. Select your GitHub repo
4. Vercel auto-detects Next.js — keep all defaults
5. **Do NOT deploy yet** — add env vars first (Step 3)

### 3. Add Environment Variables

In the Vercel project settings (before first deploy):

1. Go to: Project → Settings → Environment Variables
2. Add each variable below for **Production**, **Preview**, and **Development**:

| Variable | Value | Required |
|---|---|---|
| `RAPIDAPI_KEY` | Your RapidAPI key from the linkedin-api8 API page | Yes |
| `GITHUB_TOKEN` | Personal Access Token (Settings → Developer settings → PATs → Fine-grained → public repos read) | Optional (removes 60 req/hr limit) |

**Security:** Never commit `.env.local` to git. These values stay in Vercel's encrypted vault.

### 4. Deploy

1. Click **Deploy** in the Vercel dashboard
2. Wait for the build to complete (~2 minutes)
3. Visit your deployment URL

### 5. Verify ISR is Working

After deploy:
1. Note the page load time
2. Check the `Cache-Status` response header — should show `HIT` on repeat visits
3. ISR revalidations happen automatically:
   - GitHub Activity: every 60 seconds
   - LinkedIn Posts: every 1 hour
   - Blog + Metrics: every 5 minutes

### 6. Custom Domain (Optional)

1. Project → Settings → Domains
2. Add your domain and follow DNS instructions

## Troubleshooting

| Issue | Fix |
|---|---|
| LinkedIn posts show mock data | Verify `RAPIDAPI_KEY` in Vercel env vars and that your RapidAPI subscription is active |
| GitHub rate limit errors | Add `GITHUB_TOKEN` env var |
| Build fails | Run `npm run build` locally first and fix TypeScript errors |
| Images not loading | Check `next.config.mjs` `remotePatterns` includes the hostname |
