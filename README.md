# Revolve

Revolve is a clothing, footwear and lifestyle brand. This repository holds the
Revolve web project and its brand assets.

> **⚠️ Repository scope**
>
> **This repository is exclusively for the Revolve clothing, footwear and
> lifestyle brand. Do not place Study Pal Academy code, assets, credentials or
> configuration in this repository.**

## Project structure

```
revolve/
├── public/
│   └── images/
│       └── revolve/
│           ├── branding/     # logos, brand marks
│           ├── clothing/     # apparel product images
│           ├── shoes/        # footwear product images
│           ├── accessories/  # accessories product images
│           └── campaigns/    # campaign / editorial imagery
├── src/
│   ├── components/           # reusable UI components
│   ├── pages/                # page views
│   ├── data/                 # static data / catalog
│   ├── services/             # API / data services
│   └── assets/               # imported assets (fonts, icons, etc.)
├── .env.example              # environment variable template (no secrets)
├── .gitignore
├── README.md
└── package.json
```

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in your values
npm run dev
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values. Never commit real
secrets — only `.env.example` (with empty placeholders) is tracked in git.

## Repository

- GitHub: https://github.com/tnova890808-cmd/revolve

This project is entirely separate from Study Pal Academy
(`tnova890808-cmd/study-pal-academy`). Keep the two codebases, assets and
credentials fully isolated.
