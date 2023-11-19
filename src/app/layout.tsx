import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Titulo de la pagina",
  description: "Parte front de la aplicación de gestión de tareas",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
