import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import SideBar from "@/components/layout/SideBar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PSA - Gestión de tareas",
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
        <div className="flex flex-col justify-between max-h-screen min-h-screen">
          <main className="px-10 my-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
