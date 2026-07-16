# OMNIA — State Transparency Platform

A privacy-first, open-source web application that aggregates public government data from reliable sources. Explore politics, economy, laws, international relations, and historical events for European countries, USA, and Russia.

## 🎯 Mission
Cut through fragmented news cycles. One place. All verified sources. Complete picture.

## 🌍 Coverage (MVP)
- **Europe**: Italy, Germany (expandable to all EU)
- **America**: USA
- **Other**: Russia

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│         FRONTEND (React, Mobile-first)          │
│  Home → Search → Country Dashboard → Timeline   │
└────────────────────┬────────────────────────────┘
                     │ (HTTPS, no tracking)
┌────────────────────▼────────────────────────────┐
│     BACKEND API (Node.js/Express)               │
│  /api/countries /api/economy /api/politics      │
└────────────────────┬────────────────────────────┘
                     │ (Anonymous rate limiting)
┌────────────────────▼────────────────────────────┐
│  PostgreSQL (immutable historical log)          │
│  + Redis cache (5min TTL)                       │
└────────────────────┬────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
    ┌───▼──┐    ┌───▼──┐    ┌───▼──┐
    │World │    │ News │    │Wiki  │
    │ Bank │    │ API  │    │data  │
    └──────┘    └──────┘    └──────┘
```

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Vite, Tailwind CSS, Axios |
| **Backend** | Node.js, Express, PostgreSQL, Redis |
| **External APIs** | World Bank, NewsAPI, Wikidata, OECD, UN |
| **Deployment** | Docker, GitHub Actions |

## 🔐 Privacy Guarantee
- ✅ **Zero user tracking**: No analytics, no cookies, no personal data collection
- ✅ **Anonymous API access**: Rate limiting by IP only
- ✅ **No third-party integrations**: All data sourced directly from public APIs
- ✅ **HTTPS-only**: All connections encrypted
- ✅ **Server logs aggregated**: Never traceable to individual user

## 📊 Data Categories

### Politics
- Government structure (head of state, PM, parliament)
- Current political parties & coalitions
- Laws passed/pending (with full text links)
- Elections schedule & results

### Economy
- GDP, growth rate, inflation
- Unemployment rate
- Debt, trade balance
- Currency exchange rates

### International Relations
- Treaties & alliances
- UN/NATO/EU/BRICS membership
- Trade agreements

### Events Timeline
- Major political events (elections, reforms)
- Economic shocks (recessions, booms)
- Military/conflict events
- Notable international incidents
- **Neutral, factual language only**

### Demographics
- Total population & growth
- Age distribution
- Migration balance
- Urbanization rate

### Crime & Justice
- Crime statistics
- Corruption indices
- Prison population

## 🚀 Quick Start

```bash
# Clone repo
git clone https://github.com/moba06/omnia.git
cd omnia

# With Docker
docker-compose up -d

# Or manually
cd backend && npm install && npm run dev
# Terminal 2
cd frontend && npm install && npm run dev
```

Access at `http://localhost:5173` (frontend) and `http://localhost:3000` (backend API).

## 📡 Data Sources

Every data point includes:
1. **Source URL** (clickable, verified)
2. **Last updated** timestamp
3. **Data origin** (e.g., "World Bank")

### API Partners
| Category | Source | Free Tier |
|----------|--------|-----------|
| Economy | World Bank Open Data | ✅ Unlimited |
| Population | UN Population Division | ✅ Unlimited |
| Laws/Politics | Wikidata, DBpedia | ✅ Unlimited |
| Recent Events | NewsAPI | ✅ 100 req/day |
| Crime/Justice | Transparency International | ✅ Unlimited |

## 📜 License

MIT — Free to use, modify, distribute.

---

**Made with ❤️ for transparent democracy.**
