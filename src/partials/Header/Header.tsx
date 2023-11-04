import { Link } from "react-router-dom";
import { MobileMenu } from "../MobileMenu";

export function Header() {
  return (
    <header className="z-30 w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Site branding */}
          <div className="mr-4 shrink-0">
            {/* Logo */}
            <Link to="/" className="hidden md:block" aria-label="Relative Path">
              <img
                className="h-10 w-auto rounded-sm fill-current text-purple-600"
                src="/rp_brand_transparent.png"
              />
            </Link>
            <Link to="/" className="block md:hidden" aria-label="Relative Path">
              <img
                className="h-10 w-auto rounded-sm fill-current text-purple-600"
                src="/rp_logo_transparent.png"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-end">
              <li>
                <Link
                  to="about"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  About
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/data-route"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Data Route
                </Link>
              </li> */}
              <li>
                <Link
                  to="/contact"
                  className="flex items-center px-4 py-2 text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
                >
                  Contact
                </Link>
              </li>
              {/* 1st level: hover */}
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
