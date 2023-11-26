import Spinner from "@/components/Spinner";

export default function Loading() {
  return (
    <div className="place-items-center grid">
      <Spinner />
      <span className="text-lg font-semibold"> Cargando </span>
    </div>
  );
}
