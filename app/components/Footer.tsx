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
            <div className="rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8674112333956!2d106.88471961088854!3d-6.148503460244549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f58254194cdb%3A0xa2ece092203148ea!2sJMK%20AUTO%20GALLERY!5e0!3m2!1sid!2sid!4v1784112456277!5m2!1sid!2sid"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-44 rounded-2xl"
              />
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
