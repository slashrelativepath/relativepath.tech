import { Outlet } from "react-router-dom";
import { Header } from "./partials/Header/Header";
import "@fontsource-variable/inter";
import PageIllustration from "./partials/PageIllistration";
import Footer from "./partials/Footer";

// A "layout route" is a good place to put markup you want to
// share across all the pages on your site, like navigation.
export function Layout() {
  return (
    <>
      {/* class="font-inter relative min-h-screen overflow-x-hidden bg-gray-900 tracking-tight text-gray-200 antialiased" */}
      <Header />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
        <PageIllustration />
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
