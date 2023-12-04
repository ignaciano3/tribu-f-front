"use client";
import { DeleteTicket } from "@/api/soporte";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";

export default function PageDelete({
  params,
}: {
  params: { idTicket: number };
}) {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center text-center items-center space-y-2">
      <Title title="Eliminar ticket" />
      <button
        className="bg-red-600 px-4 py-2 rounded text-lg"
        onClick={() => {
          DeleteTicket(params.idTicket);
          router.back();
        }}
      >
        Eliminar
      </button>
      <button
        className="bg-yellow-400 px-4 py-2 rounded text-lg"
        onClick={() => router.back()}
      >
        Cancelar
      </button>
    </div>
  );
}
