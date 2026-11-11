# Petit Mot

A French learning playground with vocabulary games, verb practice, lessons, listening/speaking activities, and progress tracking.

## Run locally

Requires Node.js >=22.13.0.

```sh
npm run install:ci
npm run dev
```

Open the loopback URL printed by the development server (normally http://localhost:5173). Use `npm run build` to build and `npm start` to preview the built Worker.

See [DEVELOPMENT.md](DEVELOPMENT.md) for local D1 migrations, simulated sign-in, and the Sites runtime. Local development uses its own database; production learning records are not included in this repository.

## Source map

- `app/game.tsx`: main vocabulary game
- `app/verb-studio.tsx`, `app/verbs.ts`: verb practice
- `app/vocab.ts`, `app/lessons.ts`, `CONTENT.md`: learning content
- `app/progress.ts`, `app/use-progress.ts`: progress state
- `app/api/progress/route.ts`, `db/`, `drizzle/`: signed-in progress persistence
- `app/globals.css`, `app/learning-visuals.tsx`: styling and visuals

## Working from another session

Give your agent this repository URL and ask it to read `AGENTS.md`, then inspect only the files relevant to your change. Public access permits reading and forks; pushing changes requires repository write access.

## Hosting and synchronization

The existing app is hosted through ChatGPT Sites. This repository begins as a source snapshot of Sites commit `89aa750965c4e8339267c08be822cdf43f3af4d6`. GitHub commits do **not** automatically deploy or synchronize to Sites. An authorized Sites editor must explicitly bring reviewed changes into the Sites source repository and publish them. Always compare current source first to avoid overwriting concurrent edits.

The existing `.openai/hosting.json` identifies the original Site and declares its D1 binding. Forks must remove that project ID before creating their own Site. ChatGPT sign-in and hosted persistence depend on the Sites runtime; GitHub Pages alone cannot run the server features.

## Contributing

Use small changes, describe validation, and preserve French accents, accessibility, mobile behavior, and progress compatibility. Never commit credentials, local databases, private learning records, or build/runtime directories. Keep third-party license notices.

## License

Project-authored code is available under the MIT License. Vendored components and dependencies retain their own licenses and notices.
