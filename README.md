# Huzaifa Rehan Portfolio

Next.js portfolio with an embedded production-ready RAG assistant. The chatbot runs entirely inside the Next.js app through Route Handlers, uses the OpenAI Agents SDK for TypeScript as the agent framework (with Google Gemini or OpenAI models), stores portfolio vectors in Qdrant, and answers only from portfolio content.

## Architecture

- `src/data/portfolio.ts` is the single source of truth for portfolio content.
- `src/lib/portfolio-loader.ts` converts existing portfolio data into searchable documents without duplicating copy.
- `src/ai/ingest.ts` cleans, chunks, embeds, and upserts portfolio content into Qdrant.
- `src/ai/qdrant.ts` provides reusable collection, upsert, delete, update, and search helpers.
- `src/ai/agent.ts` creates the `Portfolio Assistant` agent with the `searchPortfolio` retrieval tool.
- `src/app/api/chat/route.ts` streams assistant responses from the Agents SDK.
- `src/app/api/ingest/route.ts` rebuilds the knowledge base.
- `src/app/api/health/route.ts` reports runtime configuration health.
- `src/components/chatbot/Chatbot.tsx` renders the floating assistant UI.

## Requirements

- Node.js 22 or newer
- Qdrant Cloud or a local Qdrant instance
- A Gemini API key from Google AI Studio (default), or an OpenAI / OpenAI-compatible API key

## Environment Variables

Create `.env.local`:

```bash
# Provider: "gemini" or "openai". If unset, GEMINI_API_KEY selects Gemini.
AI_PROVIDER=gemini

# Gemini (default)
GEMINI_API_KEY=
GEMINI_MODEL=gemini-2.5-flash
GEMINI_EMBEDDING_MODEL=gemini-embedding-001
# GEMINI_BASE_URL=https://generativelanguage.googleapis.com/v1beta/openai/

# OpenAI (used when AI_PROVIDER=openai)
OPENAI_API_KEY=
OPENAI_BASE_URL=
MODEL_NAME=gpt-4.1-mini
EMBEDDING_MODEL=text-embedding-3-small

# Optional: shrink embedding vectors (e.g. 768 for Gemini)
EMBEDDING_DIMENSIONS=

QDRANT_URL=http://localhost:6333
QDRANT_API_KEY=
QDRANT_COLLECTION=portfolio_knowledge_base
RETRIEVAL_LIMIT=6
INGEST_SECRET=
```

The OpenAI Agents SDK is the agent framework for both providers. With Gemini, it calls Google's OpenAI-compatible Chat Completions endpoint, and embeddings go through the same endpoint. OpenAI trace export is turned off for Gemini because it requires an OpenAI key.

### Switching providers

Each provider's embeddings have a different vector size, so **run `POST /api/ingest` after switching** (and after changing `EMBEDDING_DIMENSIONS`). Ingestion detects the size change and rebuilds the Qdrant collection automatically. Until you re-ingest, chat searches will fail with a vector dimension error.

## Running Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Building The Knowledge Base

Start the app, then run ingestion whenever portfolio content changes:

```bash
curl -X POST http://localhost:3000/api/ingest
```

If `INGEST_SECRET` is set, send it as a bearer token:

```bash
curl -X POST http://localhost:3000/api/ingest -H "Authorization: Bearer your-secret"
```

The route reads the current portfolio source data, regenerates embeddings, recreates the Qdrant collection shape when needed, deletes old portfolio vectors, and upserts the latest chunks.

## API Routes

- `POST /api/chat`: streams chatbot responses.
- `POST /api/ingest`: rebuilds the Qdrant knowledge base.
- `GET /api/health`: checks runtime configuration.

## Deployment To Vercel

1. Set the project runtime to Node.js 22 or newer.
2. Add all environment variables in Vercel Project Settings.
3. Use Qdrant Cloud or another reachable Qdrant URL.
4. Deploy the app.
5. Trigger `POST /api/ingest` after deployment so production Qdrant has the latest portfolio vectors.

## Troubleshooting

- Missing API key: check `GEMINI_API_KEY` (Gemini) or `OPENAI_API_KEY` (OpenAI). `GET /api/health` shows which provider is active.
- Provider errors: confirm the model names (`GEMINI_MODEL` / `GEMINI_EMBEDDING_MODEL`, or `MODEL_NAME` / `EMBEDDING_MODEL`) exist for your key.
- Vector dimension errors: you switched provider or dimensions without re-running `POST /api/ingest`.
- Empty or weak answers: run `POST /api/ingest` after content changes.
- Qdrant failures: verify `QDRANT_URL`, `QDRANT_API_KEY`, and collection permissions.
- Runtime errors from the Agents SDK: confirm Node.js 22+ locally and in Vercel.
