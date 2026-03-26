import type { Metadata } from "next";
import "./globals.css";
import AppWrapper from "@/components/AppWrapper";

const siteUrl = "https://erictattoo.fi";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Tattoo Helsinki | Eric Le – Tattoo Artist Finland | Fineline Tattoo, Design Tattoo & Cover-up",
    template: "%s | Eric Le Tattoo Helsinki",
  },
  description:
    "Tattoo Helsinki – Eric Le is a professional tattoo artist in Helsinki & Espoo, Finland. Specializing in fineline tattoo, design tattoo, tattoo cover-up & custom work. Guest tattoo artist in Amsterdam, Berlin & Paris. Free tattoo consultation – book your session today.",
  keywords: [
    "tattoo Helsinki",
    "tattoo helsinki",
    "Eric tattoo",
    "Eric Le tattoo",
    "tattoo Finland",
    "tattoo Espoo",
    "tattoo espoo",
    "tattoo Amsterdam",
    "tattoo amsterdam",
    "tattoo Berlin",
    "tattoo berlin",
    "tattoo Paris",
    "tattoo paris",
    "design tattoo",
    "design tattoo Helsinki",
    "tattoo consultation",
    "tattoo consultation Helsinki",
    "tattoo cover",
    "tattoo cover-up",
    "cover-up tattoo Helsinki",
    "fineline tattoo",
    "fine line tattoo",
    "fineline tattoo Helsinki",
    "tattoo artist Helsinki",
    "tattoo artist Finland",
    "tattoo artist Espoo",
    "black and grey tattoo Helsinki",
    "realism tattoo Helsinki",
    "custom tattoo Helsinki",
    "tattoo booking Helsinki",
    "guest tattoo artist Amsterdam",
    "guest tattoo artist Berlin",
    "guest tattoo artist Paris",
    "tatuointi Helsinki",
    "tatuointi Espoo",
  ],
  authors: [{ name: "Eric Le", url: siteUrl }],
  creator: "Eric Le",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Eric Le Tattoo",
    title:
      "Tattoo Helsinki | Eric Le – Fineline Tattoo, Design Tattoo & Cover-up",
    description:
      "Tattoo Helsinki & Espoo – Eric tattoo artist specializing in fineline tattoo, design tattoo, tattoo cover-up. Guest artist tattoo Amsterdam, Berlin & Paris. Free tattoo consultation. Book today.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eric Le Tattoo Helsinki - Fineline Tattoo, Design Tattoo, Cover-up Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tattoo Helsinki | Eric Le – Fineline Tattoo, Design Tattoo & Cover-up",
    description:
      "Tattoo Helsinki & Espoo – Eric tattoo artist. Fineline tattoo, design tattoo, tattoo cover-up. Guest artist Amsterdam, Berlin & Paris. Free consultation.",
    images: ["/opengraph-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&family=Inter+Display:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TattooParlor",
              name: "Eric Le Tattoo",
              url: siteUrl,
              logo: `${siteUrl}/images/logo-eric.png`,
              image: `${siteUrl}/opengraph-image.jpg`,
              description:
                "Tattoo Helsinki – Eric Le is a professional tattoo artist in Helsinki & Espoo, Finland. Specializing in fineline tattoo, design tattoo, tattoo cover-up, and custom work. Guest tattoo artist in Amsterdam, Berlin & Paris. Free tattoo consultation available.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Helsinki",
                addressRegion: "Uusimaa",
                addressCountry: "FI",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "60.1699",
                longitude: "24.9384",
              },
              priceRange: "€€",
              telephone: "",
              email: "erictattoo.fi@gmail.com",
              sameAs: ["https://www.instagram.com/eric.le.tattoo/"],
              founder: {
                "@type": "Person",
                name: "Eric Le",
                jobTitle: "Tattoo Artist",
              },
              areaServed: [
                { "@type": "City", name: "Helsinki" },
                { "@type": "City", name: "Espoo" },
                { "@type": "City", name: "Amsterdam" },
                { "@type": "City", name: "Paris" },
                { "@type": "City", name: "Berlin" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Tattoo Services Helsinki",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tattoo Consultation Helsinki",
                      description:
                        "Free tattoo consultation to discuss your design ideas",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Design Tattoo",
                      description:
                        "Custom design tattoo created from your vision",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Fineline Tattoo",
                      description:
                        "Delicate fine line tattoo art with precision",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tattoo Cover-up",
                      description:
                        "Expert tattoo cover-up to transform old tattoos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Black & Grey Tattoo Helsinki",
                      description:
                        "Stunning black and grey tattoo with exceptional detail",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Realism Tattoo",
                      description: "Hyper-realistic tattoo artwork",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "300",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
