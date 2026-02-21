import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500"],
});

const BASE_URL = "https://www.thenexturl.in";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "The Next URL | Modern Websites & ERP Systems for Schools & Businesses",
    template: "%s | The Next URL",
  },
  description:
    "The Next URL builds modern websites, school ERP systems, college management platforms, and custom digital solutions for institutions and businesses across India. Based in Shivamogga, Karnataka.",
  keywords: [
    "school website design India",
    "college website development",
    "school ERP system",
    "college management software",
    "institution website Karnataka",
    "website redesign India",
    "web development Shivamogga",
    "web development Karnataka",
    "ERP system for schools",
    "student management system",
    "fee management software",
    "admission management system",
    "coaching institute website",
    "education technology India",
    "custom website development",
    "responsive website design",
    "Next.js web development",
    "React web development India",
    "affordable website design India",
    "professional website for schools",
    "hospital website design",
    "restaurant POS system",
    "e-commerce website India",
    "hotel booking website",
    "service booking app",
    "The Next URL",
    "thenexturl.in",
    "Shivamogga web design",
    "digital solutions Karnataka",
    "small business website India",
    "SEO services India",
    "cloud hosting India",
    "website maintenance India",
  ],
  authors: [{ name: "The Next URL", url: BASE_URL }],
  creator: "The Next URL",
  publisher: "The Next URL",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "The Next URL | Modern Websites & ERP Systems for Schools & Businesses",
    description:
      "We build modern websites, school ERPs, and custom digital platforms for institutions and businesses across India. Shivamogga, Karnataka.",
    url: BASE_URL,
    siteName: "The Next URL",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Next URL - Digital Solutions for Modern Institutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Next URL | Modern Websites & ERP Systems",
    description:
      "Modern websites, school ERPs & digital platforms for institutions across India.",
    images: ["/og-image.png"],
  },
  category: "technology",
  classification: "Web Development & Digital Solutions",
  referrer: "origin-when-cross-origin",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${BASE_URL}/#organization`,
      name: "The Next URL",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/brandlogo.png`,
        width: 260,
        height: 88,
      },
      description:
        "The Next URL builds modern websites, ERP systems, and custom digital solutions for schools, colleges, institutions, and businesses across India.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Shivamogga",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8852882508",
        contactType: "customer service",
        email: "contact.thenexturl@gmail.com",
        availableLanguage: ["English", "Kannada"],
      },
      sameAs: [
        "https://wa.me/918852882508",
      ],
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      serviceType: [
        "Web Development",
        "ERP System Development",
        "School Management Software",
        "E-commerce Development",
        "SEO Services",
        "Cloud Hosting",
      ],
      priceRange: "₹₹",
      currenciesAccepted: "INR",
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "The Next URL",
      description:
        "Modern websites, ERP systems, and digital platforms for schools, colleges, and businesses.",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?s={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
