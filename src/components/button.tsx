import Link from "next/link"

export default function Button({ children,  href, ...attributes} : any) {
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