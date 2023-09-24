import { Outlet } from "react-router-dom";
import { Header } from "./partials/Header/Header";
import "@fontsource-variable/inter";
import PageIllustration from "./partials/PageIllistration";

export function Layout() {
  return (
    <div className="font-inter antialiased bg-gray-900 text-gray-200 tracking-tight min-h-screen">
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <PageIllustration />
      <Header />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  );
}
