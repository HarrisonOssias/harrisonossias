# harrisonossias.com

[![CI](https://github.com/HarrisonOssias/harrisonossias/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/HarrisonOssias/harrisonossias/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/license-MIT-3EC1B8.svg)](LICENSE)

Personal site of **Harrison Ossias**, a robotics and IoT software lead building edge-to-cloud telemetry for medical robots and power grids.

**Live:** [harrisonossias.com](https://harrisonossias.com) · **LinkedIn:** [harrison-ossias](https://www.linkedin.com/in/harrison-ossias)

## Stack

| Layer   | Choice                                                |
| ------- | ----------------------------------------------------- |
| UI      | React 19, TypeScript, Tailwind CSS 4                  |
| Build   | Vite 7                                                |
| Quality | ESLint, Prettier, CSpell, `tsc` strict type checking  |
| CI      | GitHub Actions on every push and pull request         |
| Hosting | AWS Amplify Hosting (CloudFront CDN)                  |
| Contact | API Gateway → Lambda → SES, defined in CloudFormation |

## Features

- **Interactive hero:** a canvas sensor-network mesh that reacts to the cursor and respects `prefers-reduced-motion`
- **Filterable experience timeline:** pick a skill to highlight the roles that used it
- **Single content source:** every role, degree, and skill lives in [`src/data/resume.ts`](hossias/src/data/resume.ts)
- **Contact form:** serverless and spam-resistant, with no email address exposed to scrapers (see [Contact form](#contact-form))
- **Fast by default:** AVIF/WebP responsive images, content-hashed assets cached for a year, and about 80 KB of gzipped JavaScript

## Getting started

Requires Node 22+ and Yarn 1.

```bash
cd hossias
yarn install
yarn dev
```

| Script            | What it does                                    |
| ----------------- | ----------------------------------------------- |
| `yarn dev`        | Start the dev server                            |
| `yarn build`      | Type-check and build to `dist/`                 |
| `yarn validate`   | Type check, lint, format check, and spell check |
| `yarn format`     | Format everything with Prettier                 |
| `yarn spellcheck` | Spell-check source, README, and workflows       |

## Project structure

```
hossias/
├── public/                 static files served as-is (resume PDF, icons)
└── src/
    ├── assets/             optimized portrait and logos (hashed at build time)
    ├── components/
    │   ├── hero/           hero section and the interactive node mesh
    │   └── experience/     timeline, skills, education
    ├── data/resume.ts      all site content
    ├── hooks/              scroll-reveal hook
    └── styles/App.css      Tailwind theme tokens
```

## CI and deployment

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on every push and pull request:

1. **Quality:** type check, lint, formatting, and spell check
2. **Build:** production build, with a bundle-size report in the job summary

Merging to `main` triggers an AWS Amplify build ([`amplify.yml`](amplify.yml)). [`customHttp.yml`](customHttp.yml) sets response headers, including year-long immutable caching for fingerprinted assets.

Actions are pinned to commit SHAs, and Dependabot keeps them and npm packages up to date. No credentials or account details live in this repository.

## Contact form

[`infra/contact-form.yml`](infra/contact-form.yml) is a single CloudFormation stack: an HTTP API in front of a Lambda function that emails messages through SES.

Spam and cost controls:

- **API throttling** at 1 request per second (burst 2)
- **Concurrency cap:** at most 2 Lambda invocations run at once; anything beyond that is rejected before it is billed
- **SES sandbox** caps delivery at 200 emails a day, only to the verified inbox
- **Bot traps:** a hidden honeypot field and a minimum time-to-submit; tripped requests get a fake success and send nothing
- **Validation:** origin allow-list, an 8 KB body limit, field length limits, and header-injection stripping
- **Budget alerts** by email on actual or forecast monthly spend

Deploy:

```bash
aws cloudformation deploy --profile <profile> --region <region> \
  --stack-name harrisonossias-contact \
  --template-file infra/contact-form.yml \
  --capabilities CAPABILITY_IAM \
  --parameter-overrides Recipient=<inbox>
```

Then:

1. Click the SES verification link sent to the recipient inbox.
2. Add the three DKIM CNAME records from the `DkimRecords` stack output to DNS.
3. Set the `Endpoint` output as the `VITE_CONTACT_ENDPOINT` environment variable on the Amplify branch.

For local testing, put the endpoint in `hossias/.env.development.local` (ignored by git) and add `http://localhost:5173` to the stack's `AllowedOrigins`.

## License

[MIT](LICENSE)
