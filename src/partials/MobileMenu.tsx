import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="h-6 w-6 fill-current text-gray-300 transition duration-150 ease-in-out hover:text-gray-200"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute left-0 top-0 z-20 w-full overflow-hidden pe-14 transition-all duration-300 ease-in-out sm:pe-20"
        style={
          mobileNavOpen
            ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0.8 }
        }
      >
        <ul className="bg-gray-800 px-4 py-2">
          <li>
            <Link
              to="/features"
              className="flex py-2 text-gray-300 hover:text-gray-200"
              onClick={() => setMobileNavOpen(false)}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="flex py-2 text-gray-300 hover:text-gray-200"
              onClick={() => setMobileNavOpen(false)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="flex py-2 text-gray-300 hover:text-gray-200"
              onClick={() => setMobileNavOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex py-2 text-gray-300 hover:text-gray-200"
              onClick={() => setMobileNavOpen(false)}
            >
              About us
            </Link>
          </li>
          <li className="my-2 border-b border-t border-gray-700 py-2">
            <span className="flex py-2 text-gray-300">Support</span>
            <ul className="pl-4">
              <li>
                <Link
                  to="/contact"
                  className="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/help/frequently-asked-questions"
                  className="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                  onClick={() => setMobileNavOpen(false)}
                >
                  Help center
                </Link>
              </li>
              <li>
                <Link
                  to="/404"
                  className="flex py-2 text-sm font-medium text-gray-400 hover:text-gray-200"
                  onClick={() => setMobileNavOpen(false)}
                >
                  404
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/signin"
              className="flex w-full justify-center py-2 font-medium text-purple-600 hover:text-gray-200"
              onClick={() => setMobileNavOpen(false)}
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              to="/signup"
              className="my-2 inline-flex w-full items-center justify-center rounded-sm border border-transparent bg-purple-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-purple-700"
              onClick={() => setMobileNavOpen(false)}
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
