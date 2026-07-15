import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-10">
        <div className="glass p-12 md:p-20 rounded-[3rem] border-white/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-slate-50/20 pointer-events-none" />

          <div className="relative z-10">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-between gap-10 mb-24 opacity-60">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">
                  verified_user
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Inspeksi 200+ Titik
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">
                  description
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Dokumen Terjamin
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">
                  workspace_premium
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Garansi Mesin
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl">
                  price_check
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">
                  Harga Terbaik
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="font-(family-name:--font-montserrat) text-primary mb-10 letter-track leading-tight text-3xl font-bold">
                  Pengalaman yang
                  <br />
                  Mengesankan
                </h2>
                <div className="relative">
                  <span className="material-symbols-outlined text-8xl text-primary/5 absolute -top-12 -left-8 select-none">
                    format_quote
                  </span>
                  <p className="font-(family-name:--font-inter) text-on-surface-variant italic relative z-10 leading-relaxed mb-10 text-xl">
                    &quot;Proses tukar tambah di JMK Auto Gallery sangat cepat dan
                    transparan. Mobil lama saya dihargai dengan sangat layak, dan
                    unit baru yang saya ambil dalam kondisi sangat prima.&quot;
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        alt="Testimonial"
                        className="object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVHZkXvMJdjeichAICj6lMlDjAPZxrF1Yv5cnUvZ_-26cPDUxSyXy55EobMvE01sJjJ_hj42SArj0jlcF6rfdatbS5mGyLtljngwcE9vt1h4HElvUZUhtmM3FhOxY5FqjLtfyVp53zCrrpYVmwc-UPRIn1rByeH3wJGW495S9-vJYiBq9B1GIZOJk3W4FFiWtWY6HaP0bf2O0pb8VT5BjayDPK095Fq3u6rwHggR4om0K61Qu56AxB"
                        fill
                        unoptimized
                      />
                    </div>
                    <div>
                      <div className="font-bold text-primary tracking-tight">
                        Andi Pratama
                      </div>
                      <div className="text-slate-400 text-xs uppercase tracking-widest font-bold">
                        Entrepreneur, Jakarta
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl -rotate-2 transition-transform hover:rotate-0 duration-500">
                  <Image
                    alt="Happy Family"
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV4Qnz1jOYbUGPzWkSfDBHJ49uUCeieukCHs49CgL9ptIZMvcDmw5lChuuR5UZJumOpj40IhYJYu6UhKrqFS8EvwM0QFxiNSWh2gAQBN2aWGPRmEn7-21I7aez_LaU6-Woy7nxC4TI_q7-qdz7FVUXbSEyyqHjA9i7pHShDINceO3EG_yqr_srwp0cbRe4RvUzfPHGqaZQNdGAllxVV0-Ydeu54Hg_tOi_3RoJFhKbZMY8ieqGgdb8"
                    fill
                    unoptimized
                  />
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-square shadow-xl rotate-3 transition-transform hover:rotate-0 duration-500 mt-12">
                  <Image
                    alt="Transaction"
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-RyhrDzKVByS12FacqXeEu_PgeUwYZKbipHy5DhzzF5C-yBfAUAW3aKJ9-_p3FyKvYJzjLynvsuuRGZvSizQmvsIAGmEVtycdcTKsCVjwol31iOCMMPkGrXV0A_7CDuK4VzaL4JMUfM7fh73ZG_czTLrbIJUo2Jh3331mu8yGrJzozRglCCBCYeMcRaUQCIjX_f1Nns5n0nr7IWdvl5SNTKMB7N74cRBaTtk2JaU4MX5gcXuJf9CB"
                    fill
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
