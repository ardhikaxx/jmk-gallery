import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jmkautogallery.com"),
  title: {
    default: "JMK Auto Gallery | Mobil Bekas Premium Jakarta Utara",
    template: "%s | JMK Auto Gallery",
  },
  description:
    "Kurasi eksklusif kendaraan premium di Jakarta Utara. Inspeksi 200+ titik, garansi mesin, dan transparansi digital. Temukan mobil impian Anda.",
  keywords: [
    "mobil bekas premium",
    "mobil bekas jakarta utara",
    "dealer mobil jakarta",
    "mobil mewah bekas",
    "JMK Auto Gallery",
    "mobil bekas terpercaya",
    "inspeksi mobil",
    "garansi mobil bekas",
  ],
  authors: [{ name: "JMK Auto Gallery" }],
  creator: "JMK Auto Gallery",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://jmkautogallery.com",
    siteName: "JMK Auto Gallery",
    title: "JMK Auto Gallery | Mobil Bekas Premium Jakarta Utara",
    description:
      "Kurasi eksklusif kendaraan premium di Jakarta Utara. Inspeksi 200+ titik, garansi mesin, dan transparansi digital.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JMK Auto Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JMK Auto Gallery | Mobil Bekas Premium Jakarta Utara",
    description:
      "Kurasi eksklusif kendaraan premium di Jakarta Utara. Inspeksi 200+ titik, garansi mesin, dan transparansi digital.",
    images: ["/og-image.jpg"],
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
    canonical: "https://jmkautogallery.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${montserrat.variable} ${inter.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line @next/next/google-font-display, @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-mesh text-primary">
        {children}
      </body>
    </html>
  );
}
