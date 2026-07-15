"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 500, suffix: "+", label: "Mobil Terjual" },
  { value: 1200, suffix: "+", label: "Pelanggan Puas" },
  { value: 14, suffix: " Thn", label: "Pengalaman" },
  { value: 200, suffix: "+", label: "Titik Inspeksi" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
      {count.toLocaleString("id-ID")}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-12 max-w-7xl mx-auto px-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <Counter target={stat.value} suffix={stat.suffix} />
            <div className="text-on-surface-variant text-xs uppercase tracking-widest mt-3 font-bold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
