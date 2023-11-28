"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ButtonProps {
  children: React.ReactNode;
  href: string;
  onClick?: () => void;
}

export default function Button({ children, href, ...attributes }: ButtonProps) {
  const router = useRouter();
  return (
    <Link href={href}>
      <button
        type="button"
        className="border border-gray-700 px-4 py-2 rounded bg-gray-100 dark:bg-gray-700 dark:text-white ,hover:bg-gray-800 dark:text-white dark:hover:bg-gray-800"
        {...attributes}
      >
        {children}
      </button>
    </Link>

    /*<Link href={href}>
        <div
          className={`flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-amber-100 dark:text-white dark:hover:bg-amber-700`}
        >
          <span className={`flex-1 ml-2 text-left whitespace-nowrap ${router.asPath === href && "font-bold"}`}>
            {children}
          </span>
        </div>
      </Link>
      */
  );
}
