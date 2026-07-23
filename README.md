# Portfolio — Alexandre Artaud

Portfolio personnel bâti avec Next.js (export statique), Tailwind CSS et Framer Motion.

## Développement

```bash
npm install
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Build statique

```bash
npm run build
```

Génère le site statique dans `out/`.

## Docker

Le site est packagé en export statique servi par nginx sur le port interne `7000`.

```bash
docker compose up --build
```

Le port exposé côté hôte se configure via la variable d'environnement `EXTERNAL_PORT` (copier `.env.example` en `.env` pour la personnaliser) :

```bash
cp .env.example .env
# éditer EXTERNAL_PORT si besoin
docker compose up --build
```

Par défaut, l'application est accessible sur `http://localhost:7000`.
