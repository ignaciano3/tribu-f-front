import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "@/src/styles/globals.css"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Titulo de la pagina',
  description: 'Parte front de la aplicación de gestión de tareas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
