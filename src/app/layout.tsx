import type { Metadata } from "next";
import { Poppins, Unbounded } from "next/font/google";
import Header from "@/components/layout/Header";
import { HomeFooter, InnerFooter } from "@/components/layout/Footer";
import FooterSwitch from "@/components/layout/FooterSwitch";
import ScrollTop from "@/components/layout/ScrollTop";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { site } from "@/data/site";
import "./globals.css";

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} - Creative Agency & Portfolio`,
    template: `%s || ${site.name}`,
  },
  description: site.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${unbounded.variable} ${poppins.variable}`}>
      <body>
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <div className="site-footer">
          <FooterSwitch home={<HomeFooter />} inner={<InnerFooter />} />
        </div>
        <ScrollTop />
      </body>
    </html>
  );
}
