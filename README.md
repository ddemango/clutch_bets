# EdgeLens — AI Sports Betting Insights (MVP)

This monorepo contains:
- `apps/api` — Node/Express server with OCR→JSON parsing and league analysis using OpenAI
- `apps/mobile` — React Native (Expo) app with ESPN‑style dark UI

## Quickstart (Local)

### 1) API
```bash
cd apps/api
cp .env.example .env
docker compose up -d
npm install
npx prisma migrate dev --name init
npm run dev
```

### 2) Mobile App
```bash
cd ../../apps/mobile
npm install
npm run start
# Press i for iOS Simulator or scan QR with Expo Go
```

Update `apps/mobile/app.config.js` `API_URL` to point to your API (default `http://localhost:4000/api`).

## Deploy Notes
- API can be deployed with Dockerfile to Render/Fly/Heroku.
- Use Supabase (optional) for managed Postgres + Storage.
- For App Store submission, include age gate and responsible gaming disclaimers; this app provides information only and does **not** take wagers.