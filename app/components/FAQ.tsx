"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Bagaimana proses inspeksi kendaraan di JMK?",
    answer:
      "Setiap kendaraan melalui inspeksi 200+ titik oleh teknisi bersertifikat. Kami memeriksa mesin, transmisi, rangka, kelistrikan, hingga catatan servis. Hasil inspeksi lengkap tersedia digital untuk setiap unit.",
  },
  {
    question: "Apakah bisa tukar tambah dengan mobil lama?",
    answer:
      "Tentu bisa. Kami menerima tukar tambah dengan harga kompetitif. Tim appraisal kami akan menilai mobil Anda secara transparan dan memberikan penawaran terbaik saat itu juga.",
  },
  {
    question: "Bagaimana skema pembayaran yang tersedia?",
    answer:
      "Kami menyediakan berbagai opsi: cash, kredit dengan tenor 1-5 tahun, dan leasing melalui mitra pembiayaan terkemuka. Bunga kompetitif dan proses approval cepat.",
  },
  {
    question: "Apakah ada garansi untuk mobil bekas?",
    answer:
      "Ya, setiap pembelian mendapat garansi mesin 1 tahun dan garansi transmisi 6 bulan. Kami juga menyediakan layanan purna jual dan servis berkala.",
  },
  {
    question: "Di mana lokasi showroom JMK?",
    answer:
      "Showroom kami berlokasi di Bursa Otomotif Sunter (BOS), Jakarta Utara. Kami buka setiap hari dari pukul 09.00 - 18.00 WIB. Kunjungan bisa dilakukan sesuai janji.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 max-w-7xl mx-auto px-10">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-black font-(family-name:--font-inter) text-xs tracking-[0.2em] uppercase">
            FAQ
          </span>
          <h2 className="font-(family-name:--font-montserrat) text-primary mt-4 letter-track text-3xl font-bold">
            Pertanyaan Umum
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="glass rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-(family-name:--font-montserrat) text-primary font-semibold text-sm pr-4">
                  {faq.question}
                </span>
                <span
                  className={`material-symbols-outlined text-on-surface-variant transition-transform duration-300 shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  expand_more
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
