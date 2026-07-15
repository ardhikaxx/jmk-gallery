export default function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    name: "JMK Auto Gallery",
    description:
      "Destinasi utama mobil bekas premium di Jakarta Utara. Kurasi eksklusif kendaraan premium dengan teknologi inspeksi mutakhir.",
    url: "https://jmkautogallery.com",
    telephone: "+6281234567890",
    email: "hello@jmkautogallery.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bursa Otomotif Sunter (BOS)",
      addressLocality: "Jakarta Utara",
      addressRegion: "DKI Jakarta",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.1576,
      longitude: 106.8711,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_NUA0u8EMZx___8u_9Ig5O70vLd0VedCvsllK0rQnkvDiX_uvZ2uUtJs4wTHZQyroNxxhtPhKX1remb0EO_2O64ptnluvAl99SbyHUbSsHt9tC_quRjuBOJDl8_dE7aSFFAwd78bPXeS-K2ZNAR6zV8DKLCdiUKqFK2wTOYDqOuagDj_sLxtFC8wdOidtFHEzcdrv0caRho_Wykst-WLUYKQmySj6PKDR7ZxYegHC9MqPPNdkpIEA",
    priceRange: "$$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "350",
    },
    sameAs: ["https://www.instagram.com/jmkautogallery", "https://www.facebook.com/jmkautogallery"],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "JMK Auto Gallery",
    url: "https://jmkautogallery.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://jmkautogallery.com/cari?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
