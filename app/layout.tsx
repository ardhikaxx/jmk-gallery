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
    default: "JMK Auto Gallery | Showroom Mobil Mewah & Premium Bekas Jakarta Utara",
    template: "%s | JMK Auto Gallery",
  },
  description:
    "Showroom mobil mewah & premium bekas terpercaya di Jakarta Utara. Toyota Alphard, BMW, Mercedes-Benz, Land Cruiser, dan unit premium lainnya. Inspeksi 200+ titik, garansi mesin, harga terbaik.",
  keywords: [
    "showroom mobil mewah",
    "showroom mobil premium",
    "mobil mewah bekas",
    "mobil premium bekas jakarta",
    "dealer mobil mewah jakarta",
    "showroom mobil bekas jakarta utara",
    "jual mobil mewah bekas",
    "beli mobil premium",
    "Toyota Alphard bekas",
    "BMW bekas jakarta",
    "Mercedes-Benz bekas",
    "Land Cruiser bekas",
    "mobil bekas terpercaya",
    "showroom mobil jakarta",
    "inspeksi mobil bekas",
    "garansi mobil bekas",
    "JMK Auto Gallery",
    "mobil bekas premium Jakarta Utara",
    "dealer mobil premium jakarta utara",
    "jual beli mobil mewah",
    "tukar tambah mobil mewah",
    "kredit mobil mewah bekas",
    "simulasi kredit mobil bekas",
  ],
  authors: [{ name: "JMK Auto Gallery" }],
  creator: "JMK Auto Gallery",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://jmkautogallery.com",
    siteName: "JMK Auto Gallery",
    title: "JMK Auto Gallery | Showroom Mobil Mewah & Premium Bekas Jakarta Utara",
    description:
      "Showroom mobil mewah & premium bekas terpercaya di Jakarta Utara. Inspeksi 200+ titik, garansi mesin, dan harga terbaik. Toyota Alphard, BMW, Mercedes-Benz, Land Cruiser.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JMK Auto Gallery - Showroom Mobil Mewah Jakarta Utara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JMK Auto Gallery | Showroom Mobil Mewah & Premium Bekas Jakarta Utara",
    description:
      "Showroom mobil mewah & premium bekas terpercaya di Jakarta Utara. Inspeksi 200+ titik, garansi mesin, dan harga terbaik.",
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
      data-scroll-behavior="smooth"
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
