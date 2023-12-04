import Title from "@/components/Title";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center text-center min-h-screen gap-y-4">
      <Title className="flex-1" title="Bienvenido a PSA" />
      <Title className="flex-1" title="Sistema de gestión" />
      <div className="inline-block my-4">
        <Link
          className="px-4 py-2 bg-slate-300 text-xl rounded mx-4"
          href="/projects"
        >
          Proyectos
        </Link>
        <Link
          className="px-4 py-2 bg-slate-300 text-xl rounded"
          href="/products"
        >
          Productos
        </Link>
      </div>
    </div>
  );
}
