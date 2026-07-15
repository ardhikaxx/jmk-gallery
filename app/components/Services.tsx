"use client";

import { useState } from "react";

const tabs = ["Beli Mobil", "Jual Mobil", "Tukar Tambah"] as const;

export default function Services() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Beli Mobil");

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-slate-50/50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-(family-name:--font-montserrat) text-primary mb-6 letter-track text-3xl font-bold">
            Solusi Otomotif Terpadu
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto text-sm leading-relaxed">
            Dari pemilihan unit hingga skema pembayaran, kami mendampingi
            setiap langkah Anda dengan kenyamanan maksimal.
          </p>
        </div>

        <div className="glass rounded-3xl border-white/40 shadow-2xl shadow-slate-200/40 overflow-hidden max-w-4xl mx-auto">
          <div className="flex border-b border-white/40 bg-white/30">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-5 font-bold text-xs uppercase tracking-widest transition-all ${
                  activeTab === tab
                    ? "border-b-2 border-primary text-primary"
                    : "text-slate-400 hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-10 md:p-14">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <label className="block font-(family-name:--font-inter) text-[10px] uppercase tracking-[0.1em] text-slate-400 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    className="w-full bg-white/40 border-white/60 rounded-xl h-12 focus:ring-0 focus:border-slate-400 transition-all px-4"
                    placeholder="Masukkan nama"
                    type="text"
                  />
                </div>
                <div>
                  <label className="block font-(family-name:--font-inter) text-[10px] uppercase tracking-[0.1em] text-slate-400 mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    className="w-full bg-white/40 border-white/60 rounded-xl h-12 focus:ring-0 focus:border-slate-400 transition-all px-4"
                    placeholder="0812..."
                    type="tel"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block font-(family-name:--font-inter) text-[10px] uppercase tracking-[0.1em] text-slate-400 mb-2">
                    Unit yang Diminati
                  </label>
                  <select className="w-full bg-white/40 border-white/60 rounded-xl h-12 focus:ring-0 focus:border-slate-400 transition-all px-4">
                    <option>Pilih Unit</option>
                    <option>Toyota Alphard G 2021</option>
                    <option>BMW 320i Sport 2022</option>
                    <option>Mercedes-Benz E300 2019</option>
                  </select>
                </div>
                <div>
                  <label className="block font-(family-name:--font-inter) text-[10px] uppercase tracking-[0.1em] text-slate-400 mb-2">
                    Pesan Tambahan
                  </label>
                  <textarea
                    className="w-full bg-white/40 border-white/60 rounded-xl h-12 focus:ring-0 focus:border-slate-400 transition-all px-4 pt-3 min-h-[48px]"
                    placeholder="Kebutuhan khusus Anda..."
                  />
                </div>
              </div>
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:shadow-xl hover:shadow-primary/20 transition-all"
                >
                  Kirim Pengajuan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
