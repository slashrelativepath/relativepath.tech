type NavLinkProps = {
  content: string;
  href: string;
  active?: boolean | undefined;
};

export function NavLink({ content, href, active }: NavLinkProps) {
  const activeClass = active ? "font-bold" : "";

  return (
    <li className="mr-3">
      <a
        className={`inline-block py-2 px-4 text-black no-underline ${activeClass}`}
        href={href}
      >
        {content}
      </a>
    </li>
  );
}
