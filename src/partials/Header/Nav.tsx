import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav
      className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      id="nav-content"
    >
      <ul className="list-reset lg:flex justify-end flex-1 items-center">
        <Link to="/" className="inline-block py-2 px-4 text-black no-underline">
          Home
        </Link>
        <Link
          content="About"
          to="/about"
          className="inline-block py-2 px-4 text-black no-underline"
        >
          About
        </Link>
        <Link
          content="Not Found"
          to="/not-found"
          className="inline-block py-2 px-4 text-black no-underline"
        >
          Not Found
        </Link>
      </ul>
    </nav>
  );
}
