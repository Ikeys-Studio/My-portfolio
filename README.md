# Triple Thread Agency

Premium dark-minimalist single-page website for a creative studio working across
**Creative Design**, **Digital Technology**, and **Music & Sound**.

**Tagline:** Three disciplines. One creative vision.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS 4
- Space Grotesk headings / DM Sans body via `next/font`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Before deploying, replace the placeholder contact email and site URL:

- Contact email: `hello@triplethread.agency` in
  `src/components/ContactForm.tsx` and `src/app/page.tsx` (and the `email`
  field in `src/app/layout.tsx`).
- Site URL: set `NEXT_PUBLIC_SITE_URL` to your real domain. It defaults to
  `https://triplethread.agency` and is used for canonical URLs, Open Graph
  metadata, `robots.txt`, and `sitemap.xml`.

The portfolio section intentionally presents **self-initiated studio studies**,
not client projects. No testimonials or client work are claimed.
