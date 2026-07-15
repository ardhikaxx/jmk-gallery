export default function CTABanner() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-10">
        <div className="bg-linear-to-r from-primary to-slate-800 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="relative z-10">
            <h2 className="font-(family-name:--font-montserrat) text-white text-3xl md:text-4xl font-black mb-6 tracking-tight">
              Siap Memiliki Mobil Impian?
            </h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
              Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik dari JMK Auto Gallery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-whatsapp-green text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform inline-flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-lg">chat</span>
                Chat WhatsApp
              </a>
              <a
                href="#katalog"
                className="border border-white/20 text-white px-8 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
              >
                Lihat Katalog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
