"use client";

import { useState } from "react";

const tenors = [1, 2, 3, 4, 5];

export default function CreditCalculator() {
  const [price, setPrice] = useState(500);
  const [dp, setDp] = useState(30);
  const [tenor, setTenor] = useState(3);

  const priceValue = price * 1_000_000;
  const dpValue = Math.round(priceValue * (dp / 100));
  const principal = priceValue - dpValue;
  const interestRate = 4.5;
  const monthlyPayment = Math.round((principal + principal * (interestRate / 100) * tenor) / (tenor * 12));

  const formatRp = (val: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(val);

  return (
    <section className="py-16 max-w-7xl mx-auto px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Left: Controls */}
        <div>
          <span className="text-secondary font-black font-(family-name:--font-inter) text-[10px] tracking-[0.2em] uppercase">
            Pembiayaan
          </span>
          <h2 className="font-(family-name:--font-montserrat) text-primary mt-4 mb-8 letter-track text-3xl font-bold">
            Simulasi Cicilan Pintar
          </h2>
          <p className="text-on-surface-variant mb-12 text-sm leading-relaxed max-w-lg">
            Rencanakan kepemilikan mobil impian Anda dengan perhitungan
            transparan. Kami bermitra dengan lembaga pembiayaan terkemuka untuk
            bunga terbaik.
          </p>

          <div className="space-y-10">
            <div>
              <div className="flex justify-between mb-4">
                <label className="font-(family-name:--font-inter) text-xs text-slate-500 uppercase tracking-widest">
                  Harga Kendaraan
                </label>
                <span className="font-bold text-primary">{formatRp(priceValue)}</span>
              </div>
              <input
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                max="2000"
                min="100"
                step="10"
                type="range"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>

            <div>
              <div className="flex justify-between mb-4">
                <label className="font-(family-name:--font-inter) text-xs text-slate-500 uppercase tracking-widest">
                  Uang Muka (DP)
                </label>
                <span className="font-bold text-primary">{dp}%</span>
              </div>
              <input
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                max="70"
                min="20"
                step="5"
                type="range"
                value={dp}
                onChange={(e) => setDp(Number(e.target.value))}
              />
            </div>

            <div>
              <label className="block font-(family-name:--font-inter) text-xs text-slate-500 uppercase tracking-widest mb-6">
                Pilihan Tenor (Tahun)
              </label>
              <div className="flex gap-4">
                {tenors.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTenor(t)}
                    className={`flex-1 py-3 border rounded-xl text-xs font-bold transition-all ${
                      tenor === t
                        ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                        : "border-white/60 bg-white/40 hover:bg-white"
                    }`}
                  >
                    {t} Thn
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Summary Card */}
        <div className="glass p-10 md:p-14 rounded-[2.5rem] border-white/40 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-(family-name:--font-montserrat) text-xl text-primary mb-12 letter-track font-semibold">
              Ringkasan Estimasi
            </h3>
            <div className="space-y-8">
              <div className="flex justify-between border-b border-white/40 pb-5">
                <span className="text-slate-400 text-sm">Uang Muka (DP)</span>
                <span className="font-bold text-primary">{formatRp(dpValue)}</span>
              </div>
              <div className="flex justify-between border-b border-white/40 pb-5">
                <span className="text-slate-400 text-sm">Pokok Hutang</span>
                <span className="font-bold text-primary">{formatRp(principal)}</span>
              </div>
              <div className="flex justify-between border-b border-white/40 pb-5">
                <span className="text-slate-400 text-sm">Bunga Estimasi</span>
                <span className="font-bold text-emerald-600">{interestRate}%</span>
              </div>
              <div className="pt-8 text-center md:text-left">
                <span className="text-slate-400 text-[10px] uppercase tracking-[0.2em] block mb-3">
                  Angsuran Per Bulan
                </span>
                <div className="text-4xl md:text-5xl font-black text-primary tracking-tighter">
                  {formatRp(monthlyPayment)}
                </div>
              </div>
            </div>
            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold mt-12 hover:shadow-2xl hover:shadow-primary/30 transition-all uppercase tracking-widest text-xs">
              Ajukan Kredit Sekarang
            </button>
          </div>
          <div className="absolute -right-24 -bottom-24 opacity-[0.03] rotate-12">
            <span className="material-symbols-outlined text-[350px]">payments</span>
          </div>
        </div>
      </div>
    </section>
  );
}
