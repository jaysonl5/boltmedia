# Bolt Media OKC — v2

Marketing site for Bolt Media OKC. A **Vite + React** SPA served by a small
**Express** server (static assets + a `/api/contact` nodemailer endpoint),
containerized and deployed to a **Hetzner** server with **Kamal 2** — the same
infrastructure as the Sowle Ventures and LandTrack sites.

This replaces the v1 Heroku app (Create React App + Express + MongoDB). The
project list is now static data, so there is no database.

## Stack

- **Frontend:** Vite, React 18. UI is built from the [Bolt Media Design System](../Bolt%20Media%20Design%20System)
  (tokens in `src/styles/tokens/`, components ported into `src/components/ui/`).
- **Server:** Express, Helmet, express-rate-limit, Nodemailer (`server.js`).
- **Deploy:** Docker (multi-stage) + Kamal 2 + kamal-proxy (SSL via Let's Encrypt).

## Local development

```bash
npm install
npm run dev        # Vite dev server on http://localhost:5173

# In a second terminal, run the API server so the contact form works:
npm start          # Express on http://localhost:3000 (Vite proxies /api → here)
```

To test the production build locally:

```bash
npm run build      # → dist/
npm start          # serves dist/ + /api on http://localhost:3000
```

## Configuration

Copy `.env.example` to `.env` and fill in the values (already populated for the
shared Bolt Media infrastructure). `.env` is gitignored. Kamal reads it via
`.kamal/secrets`.

| Variable | Purpose |
| --- | --- |
| `KAMAL_REGISTRY_USER` / `KAMAL_REGISTRY_PASSWORD` | Docker Hub (`boltokc`) |
| `HETZNER_IP` / `HETZNER_SSH_KEY` | Deploy target |
| `SMTP_*` | Contact-form mail (Gmail relay) |
| `CONTACT_EMAIL` | Where contact submissions are delivered |

## Deploy

Requires the Hetzner SSH key loaded in your agent (`ssh-add ~/.ssh/hetzner_key`),
Docker running locally, and DNS for `boltmediaokc.com` + `www` pointing at
`178.104.95.80`.

```bash
kamal setup        # first time only — installs Docker + kamal-proxy on the server
kamal deploy       # build (natively on the server) + push + release
kamal rollback     # revert to the previous image
kamal app logs -f  # tail logs
```

Config lives in `config/deploy.yml`. The image builds natively on the Hetzner
host (`builder.remote`) to avoid ARM→amd64 cross-compilation issues on Apple
Silicon.
