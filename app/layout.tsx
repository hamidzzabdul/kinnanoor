import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrimaryNav from "@/components/PrimaryNav";

export const metadata: Metadata = {
  title: "Kinna Noor Transformative Initiative",
  description:
    "Empowering the Future of Kinna Through Education & Community Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <PrimaryNav />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
