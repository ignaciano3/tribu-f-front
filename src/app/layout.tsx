import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Titulo de la pagina",
  description: "Parte front de la aplicación de gestión de tareas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <SideBar />
        <main className="px-10 flex-1 mb-2">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
