# Huzaifa Rehan Portfolio

Next.js portfolio with an embedded production-ready RAG assistant. The chatbot runs entirely inside the Next.js app through Route Handlers, uses the OpenAI Agents SDK for TypeScript, stores portfolio vectors in Qdrant, and answers only from portfolio content.

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
- An OpenAI-compatible chat and embeddings API

## Environment Variables

Create `.env.local`:

```bash
OPENAI_API_KEY=
OPENAI_BASE_URL=
MODEL_NAME=gpt-4.1-mini
EMBEDDING_MODEL=text-embedding-3-small
QDRANT_URL=http://localhost:6333
QDRANT_API_KEY=
QDRANT_COLLECTION=portfolio_knowledge_base
RETRIEVAL_LIMIT=6
INGEST_SECRET=
```

`OPENAI_BASE_URL` is optional for OpenAI. Set it when using an OpenAI-compatible provider. The configured provider must support chat completions for the agent and embeddings for ingestion/retrieval.

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

- Missing API key: check `OPENAI_API_KEY`.
- Provider errors: confirm `OPENAI_BASE_URL`, `MODEL_NAME`, and `EMBEDDING_MODEL` are compatible with your provider.
- Empty or weak answers: run `POST /api/ingest` after content changes.
- Qdrant failures: verify `QDRANT_URL`, `QDRANT_API_KEY`, and collection permissions.
- Runtime errors from the Agents SDK: confirm Node.js 22+ locally and in Vercel.
