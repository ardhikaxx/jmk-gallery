"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Katalog", href: "#katalog" },
  { label: "Layanan", href: "#layanan" },
  { label: "Simulasi", href: "#simulasi" },
] as const;

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [active, setActive] = useState("#beranda");
  const [menuOpen, setMenuOpen] = useState(false);

  const isPastHero = scrollY > 200;
  const scrollProgress =
    typeof document !== "undefined"
      ? Math.min(
          scrollY / (document.documentElement.scrollHeight - window.innerHeight),
          1
        )
      : 0;

  useEffect(() => {
    const onScroll = () => {
      setScrollY(window.scrollY);

      const sections = navItems.map((item) => ({
        id: item.href.slice(1),
        el: document.getElementById(item.href.slice(1)),
      }));

      let current = "#beranda";
      for (const section of sections) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = `#${section.id}`;
          }
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-300">
      <div
        className={`mx-auto max-w-7xl rounded-2xl px-8 flex justify-between items-center h-16 transition-all duration-300 ${
          isPastHero
            ? "glass border-white/40 shadow-lg mt-2"
            : "bg-white/10 border-white/10 mt-4"
        }`}
      >
        {/* Logo */}
        <div
          className={`font-(family-name:--font-montserrat) tracking-tighter font-black text-lg transition-colors duration-300 ${
            isPastHero ? "text-primary" : "text-white"
          }`}
        >
          JMK<span className={isPastHero ? "text-secondary" : "text-slate-400"}>.</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                className={`font-(family-name:--font-inter) text-sm py-1 transition-all duration-300 ${
                  isActive
                    ? isPastHero
                      ? "active-tab text-primary"
                      : "active-tab-white text-white"
                    : isPastHero
                      ? "text-on-surface-variant hover:text-primary"
                      : "text-white/60 hover:text-white"
                }`}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const id = item.href.slice(1);
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          <a
            href="/katalog"
            className={`hidden md:block px-6 py-2 rounded-xl font-(family-name:--font-inter) text-sm transition-all duration-300 ${
              isPastHero
                ? "bg-primary text-white hover:opacity-90"
                : "bg-white text-primary hover:bg-white/90"
            }`}
          >
            Cari Mobil
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
              isPastHero ? "text-primary hover:bg-slate-100" : "text-white hover:bg-white/10"
            }`}
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-7xl w-full h-0.5 bg-transparent">
        <div
          className="h-full bg-white/40 rounded-full transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Hamburger Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[200] md:hidden" onClick={() => setMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 h-full w-72 bg-primary z-[201] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={() => setMenuOpen(false)} className="mb-10 text-white">
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <div className="font-(family-name:--font-montserrat) tracking-tighter font-black text-white text-2xl mb-12">
              JMK<span className="text-slate-400">.</span>
            </div>
            <nav className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="flex items-center gap-4 py-3 px-4 text-white/70 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  <span className="font-(family-name:--font-inter) text-sm font-medium">
                    {item.label}
                  </span>
                </a>
              ))}
            </nav>
            <div className="mt-12 pt-8 border-t border-white/10 space-y-4">
              <a
                href="/katalog"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-white text-primary py-3 rounded-xl text-sm font-bold"
              >
                <span className="material-symbols-outlined">search</span>
                Cari Mobil
              </a>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-whatsapp-green text-sm"
              >
                <span className="material-symbols-outlined">chat</span>
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
