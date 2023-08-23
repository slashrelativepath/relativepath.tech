import { NavLink } from "./NavLink";

export function Nav() {
  return (
    <nav
      className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
      id="nav-content"
    >
      <ul className="list-reset lg:flex justify-end flex-1 items-center">
        <NavLink active content="Home" href="#" />
        <NavLink content="About" href="#about" />
      </ul>
    </nav>
  );
}
