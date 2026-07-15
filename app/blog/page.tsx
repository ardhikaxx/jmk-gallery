import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Blog | Tips & Berita Otomotif - JMK Auto Gallery",
  description:
    "Tips membeli mobil bekas, perawatan kendaraan, dan berita otomotif terbaru dari JMK Auto Gallery Jakarta Utara.",
  openGraph: {
    title: "Blog | Tips & Berita Otomotif - JMK Auto Gallery",
    description: "Tips membeli mobil bekas, perawatan kendaraan, dan berita otomotif terbaru.",
    type: "website",
    url: "https://jmkautogallery.com/blog",
  },
};

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const articles: Article[] = [
  {
    slug: "tips-membeli-mobil-bekas",
    title: "7 Tips Jitu Membeli Mobil Bekas Berkualitas",
    excerpt: "Jangan terburu-buru dalam membeli mobil bekas. Berikut panduan lengkap untuk mendapatkan unit terbaik dengan harga fair.",
    date: "15 Jul 2026",
    readTime: "5 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEECt3jFmrr3at-OVvH3Acenq1N9fQ2CC3AKDXjpr68hgeMCA3aUyboKNPF3MnP2kU7uur8TYfaX0BF9SO7jaZSFeLb_AL6cozjimcDl_8xdR59jmm-AWSwKYNUJUjPhnykzIJYki8R6Q4XnOpekkimLCtuLC_9s2mp--WBZjjfRXJ6zxKSUxs_BAXhAU7uXJdq3EuRslD20SqM13h6RHpOmJlwMsPeCYwkrtB6hh2JCKvEeK-wiTZ",
  },
  {
    slug: "perawatan-mobil-berkala",
    title: "Panduan Perawatan Mobil Agar Tetap Prima",
    excerpt: "Perawatan berkala adalah kunci mobil tetap awet dan aman. Kenali jadwal servis yang tepat untuk kendaraan Anda.",
    date: "10 Jul 2026",
    readTime: "4 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdxqitB02oZTcDHsqJNzJSX4A2W-HKg28cqYdNTdC_NDlec4zhNf0UAITm-_Zfis76diY5_wvCapIZFZ80ENn99eWZfdimEfUCaIMOCfg-kilK0rGPnSAgcQC3ODRSMhcbFCgZ5LjBw9CFyrqoq_7YZhz2HEcd3xw9ScRkz2mBFoJUhR1Vqzo_jRrIKC7ZtW_VrZnZOn1_ZMm7W40a5piyhnm2bKKs7rMwV8jh9RZGWEC0TpM7ArCg",
  },
  {
    slug: "simulasi-kredit-mobil",
    title: "Cara Hitung Simulasi Kredit Mobil yang Benar",
    excerpt: "Pahami cara menghitung cicilan mobil agar tidak salah pilih tenor dan DP. Hemat bunga hingga puluhan juta rupiah.",
    date: "5 Jul 2026",
    readTime: "6 min",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_NUA0u8EMZx___8u_9Ig5O70vLd0VedCvsllK0rQnkvDiX_uvZ2uUtJs4wTHZQyroNxxhtPhKX1remb0EO_2O64ptnluvAl99SbyHUbSsHt9tC_quRjuBOJDl8_dE7aSFFAwd78bPXeS-K2ZNAR6zV8DKLCdiUKqFK2wTOYDqOuagDj_sLxtFC8wdOidtFHEzcdrv0caRho_Wykst-WLUYKQmySj6PKDR7ZxYegHC9MqPPNdkpIEA",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <Breadcrumbs items={[{ label: "Blog" }]} />

        <div className="mb-16">
          <span className="text-secondary font-black font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase">
            Blog
          </span>
          <h1 className="font-[family-name:var(--font-montserrat)] text-primary mt-4 letter-track text-4xl font-bold">
            Tips & Berita Otomotif
          </h1>
          <p className="text-on-surface-variant mt-4 max-w-xl text-sm leading-relaxed">
            Informasi terbaru seputar tips membeli mobil bekas, perawatan kendaraan, dan tren otomotif.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article) => (
            <article key={article.slug} className="glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-300 group">
              <Link href={`/blog/${article.slug}`}>
                <div className="relative overflow-hidden aspect-[16/10]">
                  <Image
                    alt={article.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    src={article.image}
                    fill
                    unoptimized
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4 text-xs text-slate-400">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-[family-name:var(--font-montserrat)] text-primary letter-track font-bold text-lg mb-3 group-hover:text-secondary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
