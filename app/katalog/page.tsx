"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Car {
  slug: string;
  name: string;
  year: string;
  price: string;
  fuel: string;
  transmission: string;
  image: string;
}

const cars: Car[] = [
  {
    slug: "toyota-alphard-g",
    name: "Toyota Alphard G",
    year: "2021",
    price: "Rp 985 JT",
    fuel: "Petrol",
    transmission: "AT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhW1lVCbZF5F0afh92LyUC6UohuaCd0O33Lkkos-SJWiOlOcgnXY9ayaJbaZv7VjxbOXj5OEYPlZRHQ5aKOhuzkQIW1w8Lv3ECjfxmd6rZWZZMC3ayaL4OsOL4tYPvX3B-4jWRau5NaJtCjM5VKfSH1dbsayWBJboEAgkl8gHp6nQnECe1fVAHMgSNB05bWwUK6pdjO2JuxCEM9gyN-Qg3olU7how1HZ2iViyPd4U-MyIs0pZkC1hl",
  },
  {
    slug: "bmw-320i-sport",
    name: "BMW 320i Sport",
    year: "2022",
    price: "Rp 745 JT",
    fuel: "Petrol",
    transmission: "AT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEECt3jFmrr3at-OVvH3Acenq1N9fQ2CC3AKDXjpr68hgeMCA3aUyboKNPF3MnP2kU7uur8TYfaX0BF9SO7jaZSFeLb_AL6cozjimcDl_8xdR59jmm-AWSwKYNUJUjPhnykzIJYki8R6Q4XnOpekkimLCtuLC_9s2mp--WBZjjfRXJ6zxKSUxs_BAXhAU7uXJdq3EuRslD20SqM13h6RHpOmJlwMsPeCYwkrtB6hh2JCKvEeK-wiTZ",
  },
  {
    slug: "mercedes-e300",
    name: "Mercedes-Benz E300",
    year: "2019",
    price: "Rp 820 JT",
    fuel: "Petrol",
    transmission: "AT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdxqitB02oZTcDHsqJNzJSX4A2W-HKg28cqYdNTdC_NDlec4zhNf0UAITm-_Zfis76diY5_wvCapIZFZ80ENn99eWZfdimEfUCaIMOCfg-kilK0rGPnSAgcQC3ODRSMhcbFCgZ5LjBw9CFyrqoq_7YZhz2HEcd3xw9ScRkz2mBFoJUhR1Vqzo_jRrIKC7ZtW_VrZnZOn1_ZMm7W40a5piyhnm2bKKs7rMwV8jh9RZGWEC0TpM7ArCg",
  },
  {
    slug: "mitsubishi-pajero",
    name: "Mitsubishi Pajero Sport",
    year: "2022",
    price: "Rp 545 JT",
    fuel: "Diesel",
    transmission: "AT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_NUA0u8EMZx___8u_9Ig5O70vLd0VedCvsllK0rQnkvDiX_uvZ2uUtJs4wTHZQyroNxxhtPhKX1remb0EO_2O64ptnluvAl99SbyHUbSsHt9tC_quRjuBOJDl8_dE7aSFFAwd78bPXeS-K2ZNAR6zV8DKLCdiUKqFK2wTOYDqOuagDj_sLxtFC8wdOidtFHEzcdrv0caRho_Wykst-WLUYKQmySj6PKDR7ZxYegHC9MqPPNdkpIEA",
  },
  {
    slug: "honda-cr-v-turbo",
    name: "Honda CR-V Turbo",
    year: "2021",
    price: "Rp 425 JT",
    fuel: "Petrol",
    transmission: "AT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhW1lVCbZF5F0afh92LyUC6UohuaCd0O33Lkkos-SJWiOlOcgnXY9ayaJbaZv7VjxbOXj5OEYPlZRHQ5aKOhuzkQIW1w8Lv3ECjfxmd6rZWZZMC3ayaL4OsOL4tYPvX3B-4jWRau5NaJtCjM5VKfSH1dbsayWBJboEAgkl8gHp6nQnECe1fVAHMgSNB05bWwUK6pdjO2JuxCEM9gyN-Qg3olU7how1HZ2iViyPd4U-MyIs0pZkC1hl",
  },
  {
    slug: "bmw-x5-xdrive40i",
    name: "BMW X5 xDrive40i",
    year: "2020",
    price: "Rp 1.25 M",
    fuel: "Petrol",
    transmission: "AT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEECt3jFmrr3at-OVvH3Acenq1N9fQ2CC3AKDXjpr68hgeMCA3aUyboKNPF3MnP2kU7uur8TYfaX0BF9SO7jaZSFeLb_AL6cozjimcDl_8xdR59jmm-AWSwKYNUJUjPhnykzIJYki8R6Q4XnOpekkimLCtuLC_9s2mp--WBZjjfRXJ6zxKSUxs_BAXhAU7uXJdq3EuRslD20SqM13h6RHpOmJlwMsPeCYwkrtB6hh2JCKvEeK-wiTZ",
  },
  {
    slug: "land-cruiser-300",
    name: "Toyota Land Cruiser 300",
    year: "2022",
    price: "Rp 2.45 M",
    fuel: "Diesel",
    transmission: "AT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhW1lVCbZF5F0afh92LyUC6UohuaCd0O33Lkkos-SJWiOlOcgnXY9ayaJbaZv7VjxbOXj5OEYPlZRHQ5aKOhuzkQIW1w8Lv3ECjfxmd6rZWZZMC3ayaL4OsOL4tYPvX3B-4jWRau5NaJtCjM5VKfSH1dbsayWBJboEAgkl8gHp6nQnECe1fVAHMgSNB05bWwUK6pdjO2JuxCEM9gyN-Qg3olU7how1HZ2iViyPd4U-MyIs0pZkC1hl",
  },
];

export default function KatalogPage() {
  const [search, setSearch] = useState("");
  const [fuelFilter, setFuelFilter] = useState("Semua");

  const filtered = cars.filter((car) => {
    const matchSearch = car.name.toLowerCase().includes(search.toLowerCase());
    const matchFuel = fuelFilter === "Semua" || car.fuel === fuelFilter;
    return matchSearch && matchFuel;
  });

  return (
    <main className="min-h-screen bg-mesh">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-32 pb-20">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-(family-name:--font-montserrat) text-primary text-3xl md:text-4xl font-bold mb-3">
            Katalog Mobil
          </h1>
          <p className="text-on-surface-variant text-sm">
            Temukan mobil impian Anda dari koleksi premium kami
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
              search
            </span>
            <input
              type="text"
              placeholder="Cari merek atau model..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-white border border-slate-200 text-sm text-primary placeholder:text-slate-400 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary/30 transition-all"
            />
          </div>
          <div className="flex gap-2">
            {["Semua", "Petrol", "Diesel"].map((fuel) => (
              <button
                key={fuel}
                onClick={() => setFuelFilter(fuel)}
                className={`px-5 py-3 rounded-xl text-sm font-bold transition-all ${
                  fuelFilter === fuel
                    ? "bg-primary text-white"
                    : "bg-white border border-slate-200 text-on-surface-variant hover:border-secondary/40"
                }`}
              >
                {fuel}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-slate-400 text-xs mb-6">
          Menampilkan {filtered.length} dari {cars.length} mobil
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-6xl text-slate-300 mb-4 block">
              search_off
            </span>
            <p className="text-on-surface-variant text-sm">
              Tidak ada mobil yang cocok dengan pencarian Anda
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((car) => (
              <Link
                key={car.slug}
                href={`/mobil/${car.slug}`}
                className="glass group rounded-3xl overflow-hidden hover:border-white/60 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-16/10">
                  <Image
                    alt={car.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    src={car.image}
                    fill
                    unoptimized
                  />
                </div>
                <div className="p-7">
                  <div className="mb-4">
                    <h3 className="font-(family-name:--font-montserrat) text-lg text-primary letter-track">
                      {car.name}
                    </h3>
                    <p className="text-slate-500 text-xs mt-1">Tahun {car.year}</p>
                  </div>
                  <div className="flex gap-4 mb-6 text-slate-400 text-xs">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-sm">settings</span>
                      {car.transmission}
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
                    <span className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold group-hover:scale-105 transition-transform">
                      Lihat Detail
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
