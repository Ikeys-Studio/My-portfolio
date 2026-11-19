import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://my-portfolio-puce-tau-56.vercel.app";
const siteName = "Triple Thread Agency";
const siteTitle = "Creative Design & Web Development in Ghana | Triple Thread Agency";
const siteDescription =
  "Triple Thread Agency connects brand identity, graphic design, web design and development, and music production. A creative studio serving Ghana and international clients.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Triple Thread Agency",
    "creative agency Ghana",
    "design agency Ghana",
    "brand identity Ghana",
    "logo and graphic design",
    "web design Ghana",
    "website development Ghana",
    "UI UX design",
    "digital experiences",
    "music production Ghana",
    "sonic branding",
    "sound design",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "Design and digital services",
  alternates: {
    canonical: "/",
    languages: {
      "en-GH": "/",
      "en": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Triple Thread Agency — Creative design, digital technology, music and sound",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      url: siteUrl,
      description: siteDescription,
      slogan: "Three disciplines. One creative vision.",
      email: "triplethreadagency@gmail.com",
      areaServed: ["Ghana", "International"],
      knowsAbout: [
        "Brand identity",
        "Graphic design",
        "Web design",
        "Web development",
        "UI/UX design",
        "Music production",
        "Sonic branding",
        "Sound design",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Creative services",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Creative Design",
            itemListElement: [
              { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Brand identity and art direction" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Graphic and editorial design" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Digital Technology",
            itemListElement: [
              { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Website design and development" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", name: "UI/UX design and front-end development" } },
            ],
          },
          {
            "@type": "OfferCatalog",
            name: "Music & Sound",
            itemListElement: [
              { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Music production and original composition" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", name: "Sonic branding and sound design" } },
            ],
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      description: siteDescription,
      inLanguage: "en-GH",
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
