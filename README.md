# Triple Thread Agency

Premium dark-minimalist single-page website for a creative studio working across
**Creative Design**, **Digital Technology**, and **Music & Sound**.

**Tagline:** Three disciplines. One creative vision.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS 4
- Space Grotesk headings / DM Sans body via `next/font`
- Resend API for server-side contact enquiry email delivery

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact enquiry setup

The contact form submits to the server-side `/api/contact` endpoint. The endpoint
validates submissions, checks the request origin, applies a lightweight
per-instance rate limit and honeypot check, then sends the enquiry through Resend.
It never exposes the email provider API key to the browser.

1. Create a Resend account and verify a sending domain you control.
2. Create an API key with permission to send email.
3. Copy `.env.example` to `.env.local` for local development.
4. Set these environment variables in your deployment provider (Vercel):

   - `RESEND_API_KEY`: your private Resend API key.
   - `RESEND_FROM_EMAIL`: a sender address on the domain verified in Resend,
     for example `Triple Thread Agency <enquiries@yourdomain.com>`.
   - `CONTACT_TO_EMAIL`: destination inbox; defaults to
     `triplethreadagency@gmail.com` if omitted.

5. Redeploy after setting the variables.

Do not commit real API keys or other secrets. The in-memory rate limiter is a
basic abuse barrier for low-volume launches; use a shared rate-limit store
(such as Upstash Redis) before relying on it for high-traffic production use.
If email delivery is not configured, the form returns a clear error and offers
the direct email address as a fallback.

## Site configuration

Set `NEXT_PUBLIC_SITE_URL` to the actual primary production domain. It is used
for canonical URLs, Open Graph metadata, `robots.txt`, and `sitemap.xml`.
Set `GOOGLE_SITE_VERIFICATION` to the verification token supplied by Google
Search Console when configuring the site property.

The portfolio section intentionally presents **self-initiated studio studies**,
not client projects. No testimonials or client work are claimed.
