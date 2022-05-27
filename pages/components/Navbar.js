import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container">
      <header className="text-gray-600 body-font -mb-20">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/binskuy.png" alt="Binar Logo" className="h-auto w-20" />
            <span className="ml-3 text-xl">Challenge-07</span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <div className="mx-5 hover:text-gray-900 text-lg">
              <Link href="/">Home</Link>
            </div>
            <div className="mx-5 hover:text-gray-900 text-lg">
              <Link href="./diagram">Diagram</Link>
            </div>
            <div className="mx-5 hover:text-gray-900 text-lg">
              <Link href="./inputbox">Input Box</Link>
            </div>
            <div className="mx-5 hover:text-gray-900 text-lg">
              <Link href="./download">Download</Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
