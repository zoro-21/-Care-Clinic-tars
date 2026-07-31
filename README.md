# Care+Clinic

Production-ready React 19 + Vite healthcare website with Tailwind CSS, React Router, Framer Motion, Lucide icons, React Hook Form, dark mode, SEO assets, Vitest, Playwright, Docker, Vercel config, ESLint, Prettier, and Husky.

## Recommended runtime

Use Node.js 20 LTS for local development and CI parity.

```bash
node -v
npm -v
npm config get registry
```

The registry should be `https://registry.npmjs.org/`. If needed:

```bash
npm config set registry https://registry.npmjs.org/
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173` and verify the navbar, hero, services, doctors, locations, FAQ, contact form, dark mode, floating AI button, and appointment modal.

## Quality checks

```bash
npm run lint
npm test
npm run build
npm run preview
npm run test:e2e
```

## Tars AI Chat link :https://neoagent.hellotars.com/chat/xaPkPWa0?region=us

The floating chat component can load a real Tars embed script when `VITE_TARS_EMBED_URL` is present. Configure the Tars agent to answer the FAQ knowledge base, ask whether the visitor is a new or existing patient, capture appointment details, and demonstrate Salesforce handoff through the mock service or a production API.
