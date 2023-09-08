import { Link } from "react-router-dom";

export function Nav() {
  return (
    <nav
      className="w-full flex-grow flex items-center mt-0 bg-white bg-transparent text-black p-4 z-20"
      id="nav-content"
    >
      <ul className="list-reset flex justify-end flex-1 items-center">
        <Link to="/" className="inline-block py-2 px-4 text-black no-underline">
          Home
        </Link>
        <Link
          to="/about"
          className="inline-block py-2 px-4 text-black no-underline"
        >
          About
        </Link>
        <Link
          to="/data-route"
          className="inline-block py-2 px-4 text-black no-underline"
        >
          Data Route
        </Link>
        <Link
          to="/not-found"
          className="inline-block py-2 px-4 text-black no-underline"
        >
          Not Found
        </Link>
      </ul>
    </nav>
  );
}
