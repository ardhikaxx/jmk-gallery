import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="col-span-1">
            <div className="font-(family-name:--font-montserrat) tracking-tighter font-black text-2xl mb-8">
              JMK<span className="text-slate-400">.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-10 max-w-xs">
              Destinasi utama mobil bekas premium di Jakarta Utara. Menghadirkan
              pengalaman beli mobil yang elegan dan terpercaya sejak 2010.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-white hover:text-primary transition-all"
                href="#"
              >
                <span className="material-symbols-outlined text-sm">share</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-10 text-white">
              Tautan Cepat
            </h4>
            <ul className="space-y-5">
              <li>
                <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  Katalog Unit
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  Simulasi Kredit
                </a>
              </li>
              <li>
                <a className="text-slate-400 hover:text-white transition-colors text-sm" href="#">
                  Layanan Inspeksi
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-10 text-white">
              Hubungi Kami
            </h4>
            <ul className="space-y-5 text-sm text-slate-400">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-xl">
                  location_on
                </span>
                <span className="leading-relaxed">
                  Bursa Otomotif Sunter (BOS), Jakarta Utara, DKI Jakarta
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-xl">call</span>
                +62 812 3456 7890
              </li>
              <li className="flex items-center gap-4">
                <span className="material-symbols-outlined text-xl">mail</span>
                hello@jmkautogallery.com
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] mb-10 text-white">
              Lokasi Showroom
            </h4>
            <div className="relative h-44 rounded-2xl overflow-hidden glass-dark group">
              <Image
                alt="Map"
                className="object-cover opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwSof-HHIU8juXMl5lUMxEUscIAp7pQXStVwsXXfrEg2vrkbEEP5PsICvxQZJRcTZY8DS4aUWdGsrnQkoKLoUdkybdXrsXt-DA0Fjh1K99Mc2x5KzWCAZfyJ7yGPs0pDLhtMaIbfD3QyH9_nCfpJpbS82FTIljX-3zEDvaVAFU7NQMY-PMxcFygLpgw2TXHEZsjH0Mz3txAgGi1bxA8vxMb03IYgqG1KQWJnd282DwOfwXAJxZQ75Z"
                fill
                unoptimized
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white text-primary text-[10px] uppercase font-bold px-5 py-2 rounded-full shadow-xl">
                  Buka di Maps
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-xs text-center md:text-left">
            &copy; 2024 JMK Auto Gallery. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-10">
            <a className="text-slate-500 hover:text-white transition-colors text-xs uppercase tracking-widest" href="#">
              Syarat &amp; Ketentuan
            </a>
            <a className="text-slate-500 hover:text-white transition-colors text-xs uppercase tracking-widest" href="#">
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
