import React from "react";
import Image from "next/image";

const brands = [
  {
    name: "Toyota",
    origin: "Japan",
    logoUrl: "https://cdn.simpleicons.org/toyota/0F172A",
  },
  {
    name: "Honda",
    origin: "Japan",
    logoUrl: "https://cdn.simpleicons.org/honda/0F172A",
  },
  {
    name: "BMW",
    origin: "Germany",
    logoUrl: "https://cdn.simpleicons.org/bmw/0F172A",
  },
  {
    name: "Mercedes-Benz",
    origin: "Germany",
    logoUrl: "https://cdn.simpleicons.org/mercedes/0F172A",
  },
  {
    name: "Mitsubishi",
    origin: "Japan",
    logoUrl: "https://cdn.simpleicons.org/mitsubishi/0F172A",
  },
  {
    name: "Lexus",
    origin: "Japan",
    logoUrl: "https://cdn.simpleicons.org/lexus/0F172A",
  },
  {
    name: "Porsche",
    origin: "Germany",
    logoUrl: "https://cdn.simpleicons.org/porsche/0F172A",
  },
  {
    name: "Audi",
    origin: "Germany",
    logoUrl: "https://cdn.simpleicons.org/audi/0F172A",
  },
];

export default function BrandLogos() {
  return (
    <section className="py-14 bg-surface-container relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 relative z-10">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <p className="text-on-surface-variant text-xs uppercase tracking-[0.25em] font-bold">
            Dipercaya Merek Premium
          </p>
          <div className="w-12 h-[2px] bg-secondary mt-2.5 rounded-full" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-5">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="group flex flex-col sm:flex-row lg:flex-col items-center justify-center gap-2.5 sm:gap-3 lg:gap-2.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>

              <div className="flex flex-col items-center text-center">
                <span className="font-(family-name:--font-montserrat) text-sm sm:text-base font-bold tracking-tight text-primary group-hover:text-secondary transition-colors duration-300">
                  {brand.name}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-medium">
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
