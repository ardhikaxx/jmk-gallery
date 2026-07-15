import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 min-h-screen flex items-center overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Luxury Car Background"
          className="w-full h-full object-cover opacity-40 scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_NUA0u8EMZx___8u_9Ig5O70vLd0VedCvsllK0rQnkvDiX_uvZ2uUtJs4wTHZQyroNxxhtPhKX1remb0EO_2O64ptnluvAl99SbyHUbSsHt9tC_quRjuBOJDl8_dE7aSFFAwd78bPXeS-K2ZNAR6zV8DKLCdiUKqFK2wTOYDqOuagDj_sLxtFC8wdOidtFHEzcdrv0caRho_Wykst-WLUYKQmySj6PKDR7ZxYegHC9MqPPNdkpIEA"
          fill
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-linear-to-l from-primary via-primary/80 to-transparent" />
        <div className="absolute top-1/4 -right-24 w-150 h-0.5 bg-blue-400/30 blur-sm -rotate-15 animate-pulse" />
        
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10">
        <div className="max-w-2xl ml-auto text-right">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">
                The Future of Premium Mobility
              </span>
            </div>

            <h1 className="font-(family-name:--font-montserrat) text-white mb-8 tracking-tighter leading-[1.1] text-6xl md:text-7xl font-extrabold">
              Elevasi{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-b from-slate-100 to-slate-500">
                Standar
              </span>{" "}
              Berkendara Anda
            </h1>

            <p className="font-(family-name:--font-inter) text-slate-400 mb-12 leading-relaxed text-xl">
              Kurasi eksklusif kendaraan premium dengan teknologi inspeksi
              mutakhir dan transparansi digital tanpa batas.
            </p>

            {/* Budget Filter Box */}
            <div className="backdrop-blur-2xl bg-white/3 p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                  <div>
                    <label className="block font-(family-name:--font-inter) text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4">
                      Merek Eksklusif
                    </label>
                    <select className="w-full h-12 bg-white/5 border-white/10 rounded-xl focus:ring-1 focus:ring-white/20 focus:border-white/30 font-(family-name:--font-inter) text-sm text-white transition-all appearance-none px-4">
                      <option className="bg-primary">Semua Merek</option>
                      <option className="bg-primary">Rolls-Royce</option>
                      <option className="bg-primary">Bentley</option>
                      <option className="bg-primary">Porsche</option>
                      <option className="bg-primary">Mercedes-Maybach</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-(family-name:--font-inter) text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-4">
                      Limit Investasi
                    </label>
                    <div className="pt-2">
                      <input
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                        max="5000"
                        min="100"
                        step="100"
                        type="range"
                      />
                      <div className="flex justify-between mt-4 font-(family-name:--font-inter) text-[10px] text-slate-500 uppercase tracking-widest">
                        <span>100 JT</span>
                        <span className="text-white font-bold">5 MILIAR+</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-white text-primary h-14 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-500 flex items-center justify-center gap-3 group">
                  <span className="material-symbols-outlined text-lg group-hover:rotate-90 transition-transform duration-500">
                    explore
                  </span>
                  Mulai Eksplorasi
                </button>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
