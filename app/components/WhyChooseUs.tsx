const features = [
  {
    icon: "verified_user",
    title: "Inspeksi 200+ Titik",
    description:
      "Setiap kendaraan diperiksa menyeluruh oleh teknisi bersertifikat untuk menjamin kualitas terbaik.",
  },
  {
    icon: "workspace_premium",
    title: "Garansi Resmi",
    description:
      "Garansi mesin 1 tahun dan transmisi 6 bulan memberikan ketenangan dalam setiap pembelian.",
  },
  {
    icon: "description",
    title: "Dokumen Transparan",
    description:
      "Semua dokumen kendaraan diverifikasi dan tersedia digital untuk transparansi penuh.",
  },
  {
    icon: "payments",
    title: "Harga Terbaik",
    description:
      "Harga kompetitif dengan opsi fleksibel. Kami jamin harga terbaik untuk setiap unit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="text-center mb-16">
          <span className="text-slate-400 font-black font-(family-name:--font-inter) text-xs tracking-[0.2em] uppercase">
            Mengapa Kami
          </span>
          <h2 className="font-(family-name:--font-montserrat) text-white mt-4 letter-track text-3xl font-bold">
            Keunggulan JMK Auto Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glass-dark rounded-3xl p-8 text-center group hover:bg-white/10 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-4xl text-white mb-6 block group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </span>
              <h3 className="font-(family-name:--font-montserrat) text-white font-bold text-sm mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
