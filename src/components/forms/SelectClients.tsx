"use client";
import { useRouter } from "next/navigation";

interface Option {
  version: string;
  id: string;
}

export default function SelectVersiones({
  options,
  idVersion,
  idProd,
  idCliente,
}: {
  options: Option[];
  idVersion: string;
  idProd: string;
  idCliente: string;
}) {
  const router = useRouter();
  const cambiarVersion = (idVersion: string) => {
    router.push(`/products/${idProd}/${idVersion}/${idCliente}`);
  }

  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-medium mb-2"
        htmlFor="version"
      >
        Version
      </label>
      <select
        defaultValue={idVersion}
        onChange={(e) => {
          cambiarVersion(e.target.value);
        }}
        className="appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {options.map((option, index) => (
          <option key={index} value={option.id} className="w-full">
            {option.version}
          </option>
        ))}
      </select>
    </div>
  );
}
