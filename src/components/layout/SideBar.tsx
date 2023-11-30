"use client";
import { items } from "@/constants/nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="py-3 fixed top-0 left-0 right-0 inline-block">
      <button className="ml-4" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <aside className={`${!open && "hidden"}`}>
        <div
          className="min-h-screen w-full fixed top-0 left-0 right-0 backdrop-blur-sm"
          onClick={() => setOpen(!open)}
        ></div>

        <div className="bg-gray-50 dark:bg-gray-800 min-h-screen w-80 fixed top-0 left-0">
          <button
            className="ml-4 pt-3 mb-4 text-gray-800 dark:text-white"
            onClick={() => setOpen(!open)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="h-full overflow-y-auto text-center text-lg">
            <ul className="space-y-8 w-full">
              <span className="ms-3 dark:text-white">PSA</span>
            </ul>

            <hr className="my-4" />

            <ul className="space-y-2 font-medium">
              {items.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.url}
                    className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                      pathname == item.url
                        ? "text-blue-800 dark:bg-slate-600"
                        : {}
                    } `}
                    onClick={() => setOpen(!open)}
                  >
                    {item.svg}
                    <span className="ms-3">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
