import { Brand } from "./Brand";
import { Nav } from "./Nav";
import { ToggleNavButton } from "./ToggleNavButton";

export function Header() {
  return (
    <header id="header" className="fixed w-full z-30 top-0">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <Brand />
        <ToggleNavButton />
        <Nav />
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </header>
  );
}
