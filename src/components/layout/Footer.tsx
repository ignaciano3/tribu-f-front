export default function Footer() {
  return (
    <footer className="dark:bg-gray-700 dark:text-white bg-gray-100 text-white pt-4 pb-10 flex flex-col justify-center text-center">
      <div className="mx-auto flex flex-col justify-center">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} PSA. All rights reserved.
        </p>
        <p className="pt-8">Hecho con ❤️ por Tribu F</p>
      </div>
    </footer>
  );
}
