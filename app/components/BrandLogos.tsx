import React from "react";
import Image from "next/image";

const brands = [
  { name: "Toyota", logoUrl: "https://cdn.simpleicons.org/toyota/0F172A" },
  { name: "Honda", logoUrl: "https://cdn.simpleicons.org/honda/0F172A" },
  { name: "BMW", logoUrl: "https://cdn.simpleicons.org/bmw/0F172A" },
  { name: "Mercedes-Benz", logoUrl: "https://download.logo.wine/logo/Mercedes-Benz/Mercedes-Benz-Logo.wine.png", large: true },
  { name: "Mitsubishi", logoUrl: "https://cdn.simpleicons.org/mitsubishi/0F172A" },
  { name: "Lexus", logoUrl: "https://download.logo.wine/logo/Lexus/Lexus-Logo.wine.png", large: true },
  { name: "Porsche", logoUrl: "https://cdn.simpleicons.org/porsche/0F172A" },
  { name: "Audi", logoUrl: "https://cdn.simpleicons.org/audi/0F172A" },
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
              className="group flex items-center justify-center p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-secondary/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className={`${brand.large ? "w-40 h-40 sm:w-44 sm:h-44" : "w-16 h-16 sm:w-20 sm:h-20"} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                <Image
                  src={brand.logoUrl}
                  alt={`${brand.name} logo`}
                  width={brand.large ? 176 : 80}
                  height={brand.large ? 176 : 80}
                  className="w-full h-full object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
