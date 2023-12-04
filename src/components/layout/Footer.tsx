export default function Footer() {
  return (
    <footer className="dark:bg-gray-700 dark:text-white bg-gray-100 text-white h-20 items-center flex justify-center text-center">
      <div className="mx-auto">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} PSA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
