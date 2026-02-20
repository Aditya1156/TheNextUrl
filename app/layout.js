import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export const metadata = {
  title: "The Next URL | Digital Solutions for Modern Institutions",
  description:
    "We build modern websites, management systems, and ERP platforms for schools, colleges, institutions, and businesses. We don't just build websites — we build your next URL.",
  keywords: [
    "school website design India",
    "college ERP system",
    "institution management software",
    "website redesign Karnataka",
    "The Next URL",
    "Shivamogga",
  ],
  openGraph: {
    title: "The Next URL | Digital Solutions for Modern Institutions",
    description: "Your Digital Era Starts Here",
    url: "https://thenexturl.in",
    siteName: "The Next URL",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Next URL",
    description: "Your Digital Era Starts Here",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
