import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

interface Car {
  slug: string;
  name: string;
  year: string;
  price: string;
  fuel: string;
  transmission: string;
  description: string;
  features: string[];
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
    description: "Toyota Alphard G generasi terbaru dengan kabin ultra-luxury. Fitur lengkap termasuk power sliding door, dual power seat, dan sunroof. Kondisi sangat terawat dari tangan pertama.",
    features: ["Power Sliding Door", "Dual Power Seat", "Sunroof", "Rear Entertainment", "360 Camera"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhW1lVCbZF5F0afh92LyUC6UohuaCd0O33Lkkos-SJWiOlOcgnXY9ayaJbaZv7VjxbOXj5OEYPlZRHQ5aKOhuzkQIW1w8Lv3ECjfxmd6rZWZZMC3ayaL4OsOL4tYPvX3B-4jWRau5NaJtCjM5VKfSH1dbsayWBJboEAgkl8gHp6nQnECe1fVAHMgSNB05bWwUK6pdjO2JuxCEM9gyN-Qg3olU7how1HZ2iViyPd4U-MyIs0pZkC1hl",
  },
  {
    slug: "bmw-320i-sport",
    name: "BMW 320i Sport",
    year: "2022",
    price: "Rp 745 JT",
    fuel: "Petrol",
    transmission: "AT",
    description: "BMW Seri 3 generasi G20 dengan paket Sport. Mesin 2.0L turbocharged bertenaga 184 HP. Handling presisi khas BMW dengan kabin modern dan futuristik.",
    features: ["M Sport Package", "Panoramic Sunroof", "Harman Kardon", "Park Assistant Plus", "Live Cockpit Professional"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEECt3jFmrr3at-OVvH3Acenq1N9fQ2CC3AKDXjpr68hgeMCA3aUyboKNPF3MnP2kU7uur8TYfaX0BF9SO7jaZSFeLb_AL6cozjimcDl_8xdR59jmm-AWSwKYNUJUjPhnykzIJYki8R6Q4XnOpekkimLCtuLC_9s2mp--WBZjjfRXJ6zxKSUxs_BAXhAU7uXJdq3EuRslD20SqM13h6RHpOmJlwMsPeCYwkrtB6hh2JCKvEeK-wiTZ",
  },
  {
    slug: "mercedes-e300",
    name: "Mercedes-Benz E300",
    year: "2019",
    price: "Rp 820 JT",
    fuel: "Petrol",
    transmission: "AT",
    description: "Mercedes-Benz E-Class W213 dengan mesin 2.0L turbo. Kemewahan kelas atas dengan MBUX infotainment dan fitur keselamatan lengkap. Cocok untuk eksekutif.",
    features: ["AMG Line", "Burmester Sound", "Digital Cockpit", "Ambient Lighting", "ADAS Package"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdxqitB02oZTcDHsqJNzJSX4A2W-HKg28cqYdNTdC_NDlec4zhNf0UAITm-_Zfis76diY5_wvCapIZFZ80ENn99eWZfdimEfUCaIMOCfg-kilK0rGPnSAgcQC3ODRSMhcbFCgZ5LjBw9CFyrqoq_7YZhz2HEcd3xw9ScRkz2mBFoJUhR1Vqzo_jRrIKC7ZtW_VrZnZOn1_ZMm7W40a5piyhnm2bKKs7rMwV8jh9RZGWEC0TpM7ArCg",
  },
  {
    slug: "mitsubishi-pajero",
    name: "Mitsubishi Pajero Sport",
    year: "2022",
    price: "Rp 545 JT",
    fuel: "Diesel",
    transmission: "AT",
    description: "Pajero Sport Dakar Ultimate dengan mesin diesel 2.4L MIVEC. Sangat tangguh untuk off-road namun tetap nyaman untuk harian. Super Select 4WD II.",
    features: ["Super Select 4WD II", "Rockford Sound", "Tailgate Power", "ACC", "FCM"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_NUA0u8EMZx___8u_9Ig5O70vLd0VedCvsllK0rQnkvDiX_uvZ2uUtJs4wTHZQyroNxxhtPhKX1remb0EO_2O64ptnluvAl99SbyHUbSsHt9tC_quRjuBOJDl8_dE7aSFFAwd78bPXeS-K2ZNAR6zV8DKLCdiUKqFK2wTOYDqOuagDj_sLxtFC8wdOidtFHEzcdrv0caRho_Wykst-WLUYKQmySj6PKDR7ZxYegHC9MqPPNdkpIEA",
  },
  {
    slug: "honda-cr-v-turbo",
    name: "Honda CR-V Turbo",
    year: "2021",
    price: "Rp 425 JT",
    fuel: "Petrol",
    transmission: "AT",
    description: "Honda CR-V Turbo dengan mesin 1.5L VTEC Turbo. SUV keluarga yang irit bahan bakar namun tetap bertenaga. Honda Sensing untuk keselamatan aktif.",
    features: ["Honda Sensing", "Panoramic Sunroof", "Wireless Charging", "Liftgate Power", "Walk Away Lock"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhW1lVCbZF5F0afh92LyUC6UohuaCd0O33Lkkos-SJWiOlOcgnXY9ayaJbaZv7VjxbOXj5OEYPlZRHQ5aKOhuzkQIW1w8Lv3ECjfxmd6rZWZZMC3ayaL4OsOL4tYPvX3B-4jWRau5NaJtCjM5VKfSH1dbsayWBJboEAgkl8gHp6nQnECe1fVAHMgSNB05bWwUK6pdjO2JuxCEM9gyN-Qg3olU7how1HZ2iViyPd4U-MyIs0pZkC1hl",
  },
  {
    slug: "bmw-x5-xdrive40i",
    name: "BMW X5 xDrive40i",
    year: "2020",
    price: "Rp 1.25 M",
    fuel: "Petrol",
    transmission: "AT",
    description: "BMW X5 generasi G05 dengan mesin 3.0L inline-6 turbocharged. SUV premium performa tinggi dengan kabin ultra-mewah dan fitur keselamatan terlengkap.",
    features: ["xDrive AWD", "Sky Lounge Panoramic", "Bowers & Wilkins", "Driving Assistant Professional", "Air Suspension"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEECt3jFmrr3at-OVvH3Acenq1N9fQ2CC3AKDXjpr68hgeMCA3aUyboKNPF3MnP2kU7uur8TYfaX0BF9SO7jaZSFeLb_AL6cozjimcDl_8xdR59jmm-AWSwKYNUJUjPhnykzIJYki8R6Q4XnOpekkimLCtuLC_9s2mp--WBZjjfRXJ6zxKSUxs_BAXhAU7uXJdq3EuRslD20SqM13h6RHpOmJlwMsPeCYwkrtB6hh2JCKvEeK-wiTZ",
  },
  {
    slug: "land-cruiser-300",
    name: "Toyota Land Cruiser 300",
    year: "2022",
    price: "Rp 2.45 M",
    fuel: "Diesel",
    transmission: "AT",
    description: "Land Cruiser 300 GR Sport dengan mesin 3.3L V6 Twin-Turbodiesel. SUV legendaris paling tangguh di kelasnya. Multi-Terrain Select dan Crawl Control.",
    features: ["Multi-Terrain Select", "Crawl Control", "Kinetic Dynamic Suspension", "Premium Interior", "12.3 inch Display"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhW1lVCbZF5F0afh92LyUC6UohuaCd0O33Lkkos-SJWiOlOcgnXY9ayaJbaZv7VjxbOXj5OEYPlZRHQ5aKOhuzkQIW1w8Lv3ECjfxmd6rZWZZMC3ayaL4OsOL4tYPvX3B-4jWRau5NaJtCjM5VKfSH1dbsayWBJboEAgkl8gHp6nQnECe1fVAHMgSNB05bWwUK6pdjO2JuxCEM9gyN-Qg3olU7how1HZ2iViyPd4U-MyIs0pZkC1hl",
  },
];

export function generateStaticParams() {
  return cars.map((car) => ({ slug: car.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);
  if (!car) return { title: "Mobil Tidak Ditemukan" };

  return {
    title: `${car.name} ${car.year} - ${car.price} | JMK Auto Gallery`,
    description: car.description.slice(0, 160),
    openGraph: {
      title: `${car.name} ${car.year} - ${car.price}`,
      description: car.description.slice(0, 160),
      type: "website",
      url: `https://jmkautogallery.com/mobil/${car.slug}`,
      images: [{ url: car.image, width: 1200, height: 630 }],
    },
  };
}

export default async function CarDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug === slug);

  if (!car) {
    return (
      <>
        <main className="min-h-screen bg-mesh flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">404</h1>
            <p className="text-on-surface-variant mb-8">Mobil tidak ditemukan</p>
            <Link href="/" className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-bold">
              Kembali ke Beranda
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <main className="min-h-screen bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <Breadcrumbs items={[{ label: "Katalog", href: "/katalog" }, { label: car.name }]} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="glass rounded-3xl overflow-hidden">
            <img
              alt={car.name}
              src={car.image}
              className="w-full h-auto"
            />
          </div>

          {/* Details */}
          <div>
            <h1 className="font-[family-name:var(--font-montserrat)] text-primary letter-track text-3xl md:text-4xl font-bold mb-2">
              {car.name}
            </h1>
            <p className="text-on-surface-variant text-sm mb-8">Tahun {car.year}</p>

            <div className="glass rounded-2xl p-6 mb-8">
              <div className="text-3xl font-black text-primary mb-1">{car.price}</div>
              <p className="text-slate-400 text-xs">Harga terbaik, nego sampai jadi</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-xl p-4 text-center">
                <span className="material-symbols-outlined text-secondary text-2xl mb-2">settings</span>
                <div className="text-xs text-on-surface-variant">{car.transmission}</div>
              </div>
              <div className="glass rounded-xl p-4 text-center">
                <span className="material-symbols-outlined text-secondary text-2xl mb-2">local_gas_station</span>
                <div className="text-xs text-on-surface-variant">{car.fuel}</div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-[family-name:var(--font-montserrat)] text-primary font-bold text-sm mb-4">Deskripsi</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{car.description}</p>
            </div>

            <div className="mb-10">
              <h3 className="font-[family-name:var(--font-montserrat)] text-primary font-bold text-sm mb-4">Fitur Unggulan</h3>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature) => (
                  <span key={feature} className="px-3 py-1.5 bg-slate-100 rounded-lg text-xs font-medium text-on-surface-variant">
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={`https://wa.me/6281234567890?text=Halo, saya tertarik dengan ${car.name} ${car.year}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-whatsapp-green text-white py-4 rounded-2xl font-bold text-center uppercase tracking-widest text-xs hover:opacity-90 transition-all"
              >
                Chat WhatsApp
              </a>
              <a
                href="tel:+6281234567890"
                className="flex-1 bg-primary text-white py-4 rounded-2xl font-bold text-center uppercase tracking-widest text-xs hover:opacity-90 transition-all"
              >
                Telepon
              </a>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}
