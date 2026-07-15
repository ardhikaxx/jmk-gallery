import React from "react";

const brands = [
  { name: "Toyota", origin: "Japan", initials: "TO" },
  { name: "Honda", origin: "Japan", initials: "HN" },
  { name: "BMW", origin: "Germany", initials: "BW" },
  { name: "Mercedes-Benz", origin: "Germany", initials: "MB" },
  { name: "Mitsubishi", origin: "Japan", initials: "MI" },
  { name: "Lexus", origin: "Japan", initials: "LX" },
  { name: "Porsche", origin: "Germany", initials: "PO" },
  { name: "Audi", origin: "Germany", initials: "AU" },
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
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shrink-0 rounded-full bg-primary text-white font-(family-name:--font-montserrat) text-xs font-bold tracking-tight transition-transform duration-300 group-hover:scale-110">
                {brand.initials}
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
