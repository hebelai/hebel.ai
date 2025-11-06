# Hebel.AI

Gemeinwohlorientierte, offene Plattform für Bauherren, Handwerk, Energie- und Bauherrenberater – inklusive Macher-Map und kryptografischer Datensouveränität.

## Mission
Mit Hebelwirkung die Energiewende beschleunigen: KI + Open Source + Web-of-Trust.

## Kernmodule
- **apps/platform** – Web-App (Next.js) für Bauherren, Betriebe, Berater
- **apps/api** – API (NestJS), OpenAPI, Postgres/PostGIS
- **apps/macher-map** – Quests, Kalender, Profile, Badges (Next.js)
- **packages/crypto** – Zwei-Schlüssel-Prinzip, QR-Freigaben, Verifiable Credentials (Platzhalter)
- **packages/ui** – UI-Komponenten (Tailwind, shadcn)
- **packages/types** – geteilte TS-Typen & OpenAPI-SDK
- **docs/** – Architektur, Kryptografie, Governance, Roadmap

## Quickstart
```bash
# Voraussetzungen
# - Node.js 20+, pnpm 9+, Docker (für Postgres/PostGIS)
pnpm i
docker compose up -d
pnpm dev # startet platform- und macher-map-Apps + API
```

## Architektur
- Monorepo mit pnpm
- Next.js (App Router), React, Tailwind
- NestJS API mit PostgreSQL + PostGIS
- Keycloak (OIDC) optional; SSI/VC später
- OpenAPI-First, API-SDK via `packages/types`

## Open Source
Lizenz: **AGPL-3.0-only** (siehe `LICENSE`).
Beiträge: siehe `CONTRIBUTING.md` und `CODE_OF_CONDUCT.md`.

## Sicherheit & Datenschutz
- Privacy by Design (pseudonymisierte Erstphase)
- Kryptografie: Keypairs pro Nutzer, selektive Freigaben via QR/Token
- Verifizierte Bewertungen nur nach Abschluss
- Details: `docs/cryptography.md`, `SECURITY.md`

## Governance
Gemeinnütziger Kern (Busfaktor e.V.) + Service-Schicht mit Partnern.
Siehe `GOVERNANCE.md` und `docs/open-source-model.md`.

## Roadmap (MVP → v1)
- MVP: Wärmepumpe + PV (Pilotregion), Karte, Ausschreibung v1, Bewertungen v1, Sollit-Integration
- v1: Energieberater-/Schornsteinfeger-Workflows, Einkaufspools, Quest-Badges
Siehe `docs/mvp-roadmap.md`.

## Kontakt
- Busfaktor e. V. – Projekt „Hebel.AI“
