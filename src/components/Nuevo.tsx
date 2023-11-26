import Link from "next/link";

export default function TopRightButton({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex justify-end"
    >
      {title}
    </Link>
  );
}
