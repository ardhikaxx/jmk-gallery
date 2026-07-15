const brands = [
  "Toyota",
  "Honda",
  "BMW",
  "Mercedes-Benz",
  "Mitsubishi",
  "Lexus",
  "Porsche",
  "Audi",
];

export default function BrandLogos() {
  return (
    <section className="py-10 border-y border-white/40">
      <div className="max-w-7xl mx-auto px-10">
        <p className="text-center text-on-surface-variant text-xs uppercase tracking-[0.2em] font-bold mb-10">
          Dipercaya Merek Premium
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40">
          {brands.map((brand) => (
            <span
              key={brand}
              className="font-(family-name:--font-montserrat) text-xl md:text-2xl font-black tracking-tight text-primary/60 hover:text-primary transition-colors duration-300 cursor-default"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
