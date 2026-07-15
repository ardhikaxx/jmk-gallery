import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../components/Breadcrumbs";

const articles: Record<string, { title: string; content: string; date: string; readTime: string }> = {
  "tips-membeli-mobil-bekas": {
    title: "7 Tips Jitu Membeli Mobil Bekas Berkualitas",
    date: "15 Jul 2026",
    readTime: "5 min",
    content: `
Membeli mobil bekas bisa menjadi pilihan cerdas untuk mendapatkan kendaraan berkualitas dengan harga lebih terjangkau. Namun, diperlukan kehati-hatian agar tidak mendapat unit bermasalah.

**1. Periksa Riwayat Servis**
Minta buku servis atau catatan perawatan dari pemilik sebelumnya. Mobil yang dirawat secara berkala biasanya dalam kondisi lebih baik.

**2. Inspeksi Catat Mobil**
Pastikan tidak ada tanda-tanda kecelakaan besar seperti perubahan warna cat, celah bodi yang tidak rata, atau bagian rangka yang pernah diperbaiki.

**3. Tes Drive**
Selalu lakukan uji jalan untuk merasakan kondisi mesin, transmisi, rem, dan suspensi secara langsung.

**4. Cek Dokumen Pastikan BPKB dan STNK asli dan nama pemilik sesuai. Periksa juga apakah ada pajak yang menunggak.

**5. Survei Harga Pasaran**
Bandingkan harga unit yang sama di beberapa tempat agar mendapat harga paling fair.

**6. Gunakan Jasa Inspeksi**
Manfaatkan layanan inspeksi pihak ketiga untuk penilaian lebih objektif.

**7. Pilih Dealer Terpercaya**
Beli dari dealer yang memberikan garansi dan transparansi dokumen seperti JMK Auto Gallery.
    `,
  },
  "perawatan-mobil-berkala": {
    title: "Panduan Perawatan Mobil Agar Tetap Prima",
    date: "10 Jul 2026",
    readTime: "4 min",
    content: `
Mobil yang dirawat dengan baik tidak hanya nyaman dikendarai tetapi juga memiliki nilai jual lebih tinggi di kemudian hari.

**Ganti Oli Rutin**
Oli mesin harus diganti setiap 5.000-10.000 km atau 6 bulan sekali. Oli yang sudah degradasi tidak bisa melumasi mesin dengan baik.

**Cek Filter Udara**
Filter udara kotor membuat mesin bekerja lebih keras dan boros bahan bakar. Ganti setiap 15.000-20.000 km.

**Periksa Ban**
Tekanan ban yang kurang atau berlebih bisa mempengaruhi kenyamanan dan keamanan. Periksa secara rutin dan lakukan rotasi ban setiap 10.000 km.

**Servis Transmisi**
Transmisi matik perlu ganti oli setiap 40.000-60.000 km. Jangan abaikan servis ini karena biaya perbaikan transmisi sangat mahal.

**Cek Rem**
Kampas rem yang tipis harus segera diganti. Idealnya diganti setiap 20.000-30.000 km tergantung penggunaan.
    `,
  },
  "simulasi-kredit-mobil": {
    title: "Cara Hitung Simulasi Kredit Mobil yang Benar",
    date: "5 Jul 2026",
    readTime: "6 min",
    content: `
Memahami simulasi kredit sangat penting agar tidak terkejut dengan cicilan yang harus dibayar setiap bulan.

**Komponen Kredit Mobil**
- Uang Muka (DP): Biasanya 20-30% dari harga mobil
- Pokok Hutang: Harga mobil dikurangi DP
- Bunga: Bervariasi tergantung lembaga pembiayaan
- Tenor: Lama cicilan (1-5 tahun)

**Tips Memilih Tenor**
Tenor pendek berarti cicilan lebih besar tapi total bunga lebih kecil. Tenor panjang cicilannya ringan tapi total bunga lebih besar.

**Perhatikan Denda**
Pahami denda keterlambatan cicilan dan biaya penalty pelunasan dini.

**Bandingkan Penawaran**
Jangan terpaku pada satu lembaga pembiayaan. Bandingkan bunga dan biaya admin dari beberapa leasing.
    `,
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Artikel Tidak Ditemukan" };

  return {
    title: `${article.title} | JMK Auto Gallery Blog`,
    description: article.content.slice(0, 160),
    openGraph: {
      title: article.title,
      description: article.content.slice(0, 160),
      type: "article",
      url: `https://jmkautogallery.com/blog/${slug}`,
    },
  };
}

export default async function BlogDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-mesh flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
          <p className="text-on-surface-variant mb-8">Artikel tidak ditemukan</p>
          <Link href="/blog" className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold">
            Kembali ke Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-mesh">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: article.title }]} />

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 text-xs text-slate-400">
            <span>{article.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-300" />
            <span>{article.readTime}</span>
          </div>
          <h1 className="font-[family-name:var(--font-montserrat)] text-primary letter-track text-3xl md:text-4xl font-bold leading-tight">
            {article.title}
          </h1>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="prose prose-slate max-w-none">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("**")) {
                const text = paragraph.replace(/\*\*/g, "");
                return (
                  <h2 key={i} className="font-[family-name:var(--font-montserrat)] text-primary text-xl font-bold mt-8 mb-4">
                    {text}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-on-surface-variant text-sm leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary font-bold text-sm hover:gap-3 transition-all"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Kembali ke Blog
          </Link>
        </div>
      </article>
    </main>
  );
}
