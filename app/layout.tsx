// package
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";

// lib
import { cn } from "@/lib/utils";

// css
import "./globals.css";

const GA_ID = "G-KNSNK9L795";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Shawon Telecom WLL - Mobile Wholesale Accessories in Qatar",
    template: "%s | Shawon Telecom WLL",
  },
  description:
    "Shawon Telecom WLL is a leading wholesale supplier of mobile phones, accessories, cases, chargers, and gadgets in Doha, Qatar. Quality gear at unbeatable wholesale prices.",
  keywords: [
    "mobile accessories Qatar",
    "wholesale mobile accessories",
    "phone cases Doha",
    "chargers Qatar",
    "Shawon Telecom",
    "mobile phone wholesale",
    "gadgets electronics Qatar",
    "phone accessories wholesale Doha",
  ],
  authors: [{ name: "Shawon Telecom WLL" }],
  creator: "Shawon Telecom WLL",
  metadataBase: new URL("https://shawontelecom.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Shawon Telecom WLL",
    title: "Shawon Telecom WLL - Mobile Wholesale Accessories in Qatar",
    description:
      "Quality mobile phones, accessories, cases, chargers & gadgets at wholesale prices in Doha, Qatar.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shawon Telecom WLL - Mobile Wholesale Accessories",
    description:
      "Quality mobile accessories at wholesale prices in Doha, Qatar.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(inter.variable, poppins.variable)}
      suppressHydrationWarning
    >
      <body>
        {children}

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
