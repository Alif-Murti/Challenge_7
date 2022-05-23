import Link from "next/link";

const Navbar = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">ini adalah haha</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="./diagram">Diagram</Link>
        </li>
        <li>
          <Link href="./inputbox">Input Box</Link>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
