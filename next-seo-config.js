const title = "UJaaP - User Journey as a Product";
const description = "A Framework for Better User Journeys and Interactions";

const SEO = {
  title,
  description,
  canonical: "https://ujaap.com",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://ujaap.com",
    title,
    description,
    images: [
      {
        url: "https://ujaap.com/static/images/og-banner.jpg",
        alt: title,
      },
    ],
  },
  twitter: {
    handle: "@jpvalery",
    site: "ujaap.com",
    cardType: "summary_large_image",
  },
};

export default SEO;
