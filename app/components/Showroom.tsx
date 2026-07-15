"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

interface Car {
  name: string;
  year: string;
  price: string;
  fuel: string;
  status: "Tersedia" | "Booked" | "Terjual";
  image: string;
}

const cars: Car[] = [
  {
    name: "Toyota Alphard G",
    year: "Tahun 2021",
    price: "Rp 985 JT",
    fuel: "Petrol",
    status: "Terjual",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhW1lVCbZF5F0afh92LyUC6UohuaCd0O33Lkkos-SJWiOlOcgnXY9ayaJbaZv7VjxbOXj5OEYPlZRHQ5aKOhuzkQIW1w8Lv3ECjfxmd6rZWZZMC3ayaL4OsOL4tYPvX3B-4jWRau5NaJtCjM5VKfSH1dbsayWBJboEAgkl8gHp6nQnECe1fVAHMgSNB05bWwUK6pdjO2JuxCEM9gyN-Qg3olU7how1HZ2iViyPd4U-MyIs0pZkC1hl",
  },
  {
    name: "BMW 320i Sport",
    year: "Tahun 2022",
    price: "Rp 745 JT",
    fuel: "Petrol",
    status: "Booked",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEECt3jFmrr3at-OVvH3Acenq1N9fQ2CC3AKDXjpr68hgeMCA3aUyboKNPF3MnP2kU7uur8TYfaX0BF9SO7jaZSFeLb_AL6cozjimcDl_8xdR59jmm-AWSwKYNUJUjPhnykzIJYki8R6Q4XnOpekkimLCtuLC_9s2mp--WBZjjfRXJ6zxKSUxs_BAXhAU7uXJdq3EuRslD20SqM13h6RHpOmJlwMsPeCYwkrtB6hh2JCKvEeK-wiTZ",
  },
  {
    name: "Mercedes E300",
    year: "Tahun 2019",
    price: "Rp 820 JT",
    fuel: "Petrol",
    status: "Tersedia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdxqitB02oZTcDHsqJNzJSX4A2W-HKg28cqYdNTdC_NDlec4zhNf0UAITm-_Zfis76diY5_wvCapIZFZ80ENn99eWZfdimEfUCaIMOCfg-kilK0rGPnSAgcQC3ODRSMhcbFCgZ5LjBw9CFyrqoq_7YZhz2HEcd3xw9ScRkz2mBFoJUhR1Vqzo_jRrIKC7ZtW_VrZnZOn1_ZMm7W40a5piyhnm2bKKs7rMwV8jh9RZGWEC0TpM7ArCg",
  },
  {
    name: "Mitsubishi Pajero",
    year: "Tahun 2022",
    price: "Rp 545 JT",
    fuel: "Diesel",
    status: "Tersedia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_NUA0u8EMZx___8u_9Ig5O70vLd0VedCvsllK0rQnkvDiX_uvZ2uUtJs4wTHZQyroNxxhtPhKX1remb0EO_2O64ptnluvAl99SbyHUbSsHt9tC_quRjuBOJDl8_dE7aSFFAwd78bPXeS-K2ZNAR6zV8DKLCdiUKqFK2wTOYDqOuagDj_sLxtFC8wdOidtFHEzcdrv0caRho_Wykst-WLUYKQmySj6PKDR7ZxYegHC9MqPPNdkpIEA",
  },
  {
    name: "Honda CR-V Turbo",
    year: "Tahun 2021",
    price: "Rp 425 JT",
    fuel: "Petrol",
    status: "Tersedia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhW1lVCbZF5F0afh92LyUC6UohuaCd0O33Lkkos-SJWiOlOcgnXY9ayaJbaZv7VjxbOXj5OEYPlZRHQ5aKOhuzkQIW1w8Lv3ECjfxmd6rZWZZMC3ayaL4OsOL4tYPvX3B-4jWRau5NaJtCjM5VKfSH1dbsayWBJboEAgkl8gHp6nQnECe1fVAHMgSNB05bWwUK6pdjO2JuxCEM9gyN-Qg3olU7how1HZ2iViyPd4U-MyIs0pZkC1hl",
  },
  {
    name: "BMW X5 xDrive40i",
    year: "Tahun 2020",
    price: "Rp 1.25 M",
    fuel: "Petrol",
    status: "Tersedia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEECt3jFmrr3at-OVvH3Acenq1N9fQ2CC3AKDXjpr68hgeMCA3aUyboKNPF3MnP2kU7uur8TYfaX0BF9SO7jaZSFeLb_AL6cozjimcDl_8xdR59jmm-AWSwKYNUJUjPhnykzIJYki8R6Q4XnOpekkimLCtuLC_9s2mp--WBZjjfRXJ6zxKSUxs_BAXhAU7uXJdq3EuRslD20SqM13h6RHpOmJlwMsPeCYwkrtB6hh2JCKvEeK-wiTZ",
  },
  {
    name: "Land Cruiser 300",
    year: "Tahun 2022",
    price: "Rp 2.45 M",
    fuel: "Diesel",
    status: "Tersedia",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhW1lVCbZF5F0afh92LyUC6UohuaCd0O33Lkkos-SJWiOlOcgnXY9ayaJbaZv7VjxbOXj5OEYPlZRHQ5aKOhuzkQIW1w8Lv3ECjfxmd6rZWZZMC3ayaL4OsOL4tYPvX3B-4jWRau5NaJtCjM5VKfSH1dbsayWBJboEAgkl8gHp6nQnECe1fVAHMgSNB05bWwUK6pdjO2JuxCEM9gyN-Qg3olU7how1HZ2iViyPd4U-MyIs0pZkC1hl",
  },
];

function StatusBadge({ status }: { status: Car["status"] }) {
  const colors = {
    Terjual: "glass",
    Booked: "bg-orange-400/80 backdrop-blur-md text-white",
    Tersedia: "bg-emerald-500/80 backdrop-blur-md text-white",
  };
  return (
    <span
      className={`absolute top-4 left-4 px-3 py-1 rounded-full font-(family-name:--font-inter) text-[10px] uppercase tracking-widest ${colors[status]} ${status === "Terjual" ? "border-white/40" : ""}`}
    >
      {status}
    </span>
  );
}

export default function Showroom() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="py-16 max-w-7xl mx-auto px-10">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <span className="text-secondary font-black font-(family-name:--font-inter) text-xs tracking-[0.2em] uppercase">
            Showroom Digital
          </span>
          <h2 className="font-(family-name:--font-montserrat) text-primary mt-4 letter-track text-3xl font-bold">
            Unit Pilihan Minggu Ini
          </h2>
        </div>
        <a
          className="text-slate-500 hover:text-primary font-(family-name:--font-inter) text-sm flex items-center gap-2 group transition-colors px-4 py-2 bg-white/40 border border-white/60 rounded-full"
          href="#"
        >
          Lihat Katalog Lengkap
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {cars.map((car, index) => (
          <div
            key={car.name}
            className="glass group rounded-3xl overflow-hidden hover:border-white/60 transition-all duration-500 hover:-translate-y-1"
          >
            <div
              className="relative overflow-hidden aspect-16/10 cursor-pointer"
              onClick={() => setLightbox({ src: car.image, alt: car.name })}
            >
              <Image
                alt={car.name}
                className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${car.status === "Terjual" ? "opacity-50 grayscale" : ""}`}
                src={car.image}
                fill
                unoptimized
              />
              <StatusBadge status={car.status} />
            </div>
            <div className="p-7">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-(family-name:--font-montserrat) text-lg text-primary letter-track">
                    {car.name}
                  </h3>
                  <p className="text-slate-500 text-xs mt-1">{car.year}</p>
                </div>
              </div>
              <div className="flex gap-4 mb-8 text-slate-400 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">settings</span>
                  AT
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-sm">local_gas_station</span>
                  {car.fuel}
                </span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-white/30">
                <span className="text-primary font-bold text-[22px] leading-tight">
                  {car.price}
                </span>
                {car.status === "Terjual" ? (
                  <button className="px-4 py-2 bg-slate-100/50 text-slate-400 rounded-lg text-xs font-bold cursor-not-allowed border border-slate-200/50">
                    Details
                  </button>
                ) : (
                  <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:scale-105 transition-transform">
                    Hubungi
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <ImageLightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
