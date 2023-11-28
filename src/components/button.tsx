"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Button({ children,  href, ...attributes}) {
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
    );
  }