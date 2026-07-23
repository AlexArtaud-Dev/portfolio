import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/lib/i18n";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = "https://www.rogerx.xyz";
const TITLE = "Alexandre Artaud - Ingénieur Logiciel Full Stack";
const DESCRIPTION =
  "Portfolio d'Alexandre Artaud, ingénieur logiciel full stack : développement web, self-hosting et infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: "Alexandre Artaud",
  authors: [{ name: "Alexandre Artaud", url: SITE_URL }],
  creator: "Alexandre Artaud",
  keywords: [
    "Alexandre Artaud",
    "Ingénieur logiciel",
    "Full Stack Developer",
    "Next.js",
    "TypeScript",
    "Self-hosting",
    "Homelab",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: TITLE,
    title: TITLE,
    description: DESCRIPTION,
    locale: "fr_FR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alexandre Artaud",
  url: SITE_URL,
  jobTitle: "Ingénieur Logiciel Full Stack",
  worksFor: {
    "@type": "Organization",
    name: "ABEO",
  },
  sameAs: [
    "https://github.com/AlexArtaud-Dev",
    "https://www.linkedin.com/in/alexandre-artaud/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased dark`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
