import Link from "next/link";

export default function ReturnButton({
  className,
  href,
  label,
}: {
  className?: string;
  href: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      className={`py-2 px-4 rounded ${className} bg-yellow-400 hover:bg-yellow-600 text-white font-bold`}
    >
      {label?.toUpperCase() ?? "VOLVER"}
    </Link>
  );
}
