import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LayoutClient from "./layout-client";

export const metadata: Metadata = {
  title: "Arroyo Seco es de Boca | Peña Xeneize",
  description: "La peña oficial de hinchas de Boca Juniors en Arroyo Seco, Santa Fe.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-[#090910] text-white overflow-x-hidden">
        <LayoutClient>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LayoutClient>
      </body>
    </html>
  );
}
