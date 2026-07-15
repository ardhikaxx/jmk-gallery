import React from "react";
import Image from "next/image";

const brands = [
  {
    name: "Toyota",
    origin: "Japan",
    logoUrl: "https://vl.imgix.net/img/toyota-logo.png",
  },
  {
    name: "Honda",
    origin: "Japan",
    logoUrl: "https://vl.imgix.net/img/honda-logo.png",
  },
  {
    name: "BMW",
    origin: "Germany",
    logoUrl: "https://vl.imgix.net/img/bmw-logo.png",
  },
  {
    name: "Mercedes-Benz",
    origin: "Germany",
    logoUrl: "https://vl.imgix.net/img/mercedes-benz-logo.png",
  },
  {
    name: "Mitsubishi",
    origin: "Japan",
    logoUrl: "https://vl.imgix.net/img/mitsubishi-logo.png",
  },
  {
    name: "Lexus",
    origin: "Japan",
    logoUrl: "https://vl.imgix.net/img/lexus-logo.png",
  },
  {
    name: "Porsche",
    origin: "Germany",
    logoUrl: "https://vl.imgix.net/img/porsche-logo.png",
  },
  {
    name: "Audi",
    origin: "Germany",
    logoUrl: "https://vl.imgix.net/img/audi-logo.png",
  },
];

export default function BrandLogos() {
  return (
    <section className="py-14 border-y border-slate-200/60 dark:border-white/10 bg-gradient-to-b from-slate-50/50 to-white/30 dark:from-slate-900/40 dark:to-slate-900/20 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-secondary/10 dark:bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <p className="text-on-surface-variant dark:text-slate-400 text-xs uppercase tracking-[0.25em] font-bold">
            Dipercaya Merek Premium
          </p>
          <div className="w-12 h-[2px] bg-secondary/60 dark:bg-slate-700 mt-2.5 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group relative flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-2.5 sm:gap-3 lg:gap-2.5 p-4 sm:p-5 rounded-2xl bg-white/60 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200/80 dark:border-white/10 shadow-xs hover:shadow-lg hover:shadow-slate-300/30 dark:hover:shadow-black/40 hover:border-slate-400/80 dark:hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Hover highlight effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Logo container */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110">
                <Image
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain filter drop-shadow-xs transition-all duration-300 dark:brightness-110"
                />
              </div>

              {/* Brand Info */}
              <div className="flex flex-col items-center text-center">
                <span className="font-(family-name:--font-montserrat) text-sm sm:text-base font-bold tracking-tight text-primary/80 dark:text-slate-300 group-hover:text-primary dark:group-hover:text-white transition-colors duration-300">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                  {brand.origin}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
