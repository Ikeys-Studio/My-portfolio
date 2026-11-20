# Triple Thread Agency — Portfolio Website

A responsive portfolio website for **Triple Thread Agency**, a creative studio bringing together **Creative Design**, **Digital Technology**, and **Music & Sound**.

> Three disciplines. One creative vision.

## Live website

[Visit the live website](https://my-portfolio-puce-tau-56.vercel.app)

## Project case studies

The developer portfolio includes detailed write-ups of selected self-initiated projects:

- [Triple Thread Agency](https://my-portfolio-puce-tau-56.vercel.app/developer/projects/triple-thread-agency) — agency website, responsive interface, SEO and enquiry workflow.
- [Kofi Grooves](https://my-portfolio-puce-tau-56.vercel.app/developer/projects/kofi-grooves) — PHP and MySQL portfolio project with an administration area.
- [NexusVPN](https://my-portfolio-puce-tau-56.vercel.app/developer/projects/nexusvpn) — Flutter desktop application prototype.

These are personal and self-initiated projects. They are presented as learning and development work, not as paid client engagements.

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS 4
- Resend integration for server-side contact enquiry email delivery

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/Ikeys-Studio/My-portfolio.git
cd My-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form configuration

The contact form submits to the server-side `/api/contact` endpoint. The endpoint validates submissions, checks the request origin, applies a lightweight per-instance rate limit and honeypot check, then sends the enquiry through Resend. The provider API key is not exposed to the browser.

To enable email delivery:

1. Create a Resend account and verify a sending domain you control.
2. Create an API key with permission to send email.
3. Copy `.env.example` to `.env.local` for local development.
4. Configure these environment variables in your deployment provider:

   - `RESEND_API_KEY` — private Resend API key.
   - `RESEND_FROM_EMAIL` — sender address on the verified domain.
   - `CONTACT_TO_EMAIL` — destination inbox (defaults to `triplethreadagency@gmail.com` if omitted).

5. Restart the local server or redeploy after changing environment variables.

Do not commit API keys or other secrets. Email delivery depends on valid Resend configuration and should be tested in the deployed environment. The in-memory rate limiter is a basic safeguard for low-volume use; a shared rate-limit store is recommended before relying on it for high-traffic production use.

## Site configuration

Set `NEXT_PUBLIC_SITE_URL` to the canonical production URL. It is used for canonical metadata, Open Graph metadata, `robots.txt` and `sitemap.xml`.

Set `GOOGLE_SITE_VERIFICATION` to the verification token provided by Google Search Console when verifying the site.

## Project status

This repository contains the source code for the Triple Thread Agency website and its developer portfolio pages. The case studies describe current implementation and known limitations honestly; integrations that require external credentials are not described as active until configured and tested.
