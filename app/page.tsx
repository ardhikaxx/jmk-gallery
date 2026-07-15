import Header from "./components/Header";
import Hero from "./components/Hero";
import Showroom from "./components/Showroom";
import Services from "./components/Services";
import CreditCalculator from "./components/CreditCalculator";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Stats from "./components/Stats";
import BrandLogos from "./components/BrandLogos";
import WhyChooseUs from "./components/WhyChooseUs";
import CTABanner from "./components/CTABanner";
import FAQ from "./components/FAQ";
import FadeIn from "./components/FadeIn";
import JsonLd from "./components/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />
        <Stats />
        <BrandLogos />
        <FadeIn>
          <section id="katalog" aria-label="Katalog Mobil">
            <Showroom />
          </section>
        </FadeIn>
        <WhyChooseUs />
        <FadeIn>
          <section id="layanan" aria-label="Layanan">
            <Services />
          </section>
        </FadeIn>
        <FadeIn>
          <section id="simulasi" aria-label="Simulasi Kredit">
            <CreditCalculator />
          </section>
        </FadeIn>
        <CTABanner />
        <FadeIn>
          <section aria-label="Testimoni">
            <Testimonial />
          </section>
        </FadeIn>
        <FadeIn>
          <section aria-label="FAQ">
            <FAQ />
          </section>
        </FadeIn>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
