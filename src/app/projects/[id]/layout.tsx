"use client";
//import SideBarItem from "@/components/SidebarItem"
//import { ISidebarItem } from "@/components/types"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
/*
interface LayoutProps {
  children: React.ReactNode;
  userId: number; // Nueva prop para el número
}
//const Layout: React.FC<LayoutProps> = ({ children, userId }) => {
export default function Layout({ children }: { children: any }) {


  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-800 bg-gray-800">
      <header className="bg-black sticky top-0 h-14 flex justify-center items-center font-semibold uppercase text-white">
        Ejemplo pantalla
      </header>
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="bg-grey-100 w-full md:w-60">
          <nav>
            
          </nav>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};
*/
