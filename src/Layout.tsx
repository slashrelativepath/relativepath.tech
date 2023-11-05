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
      <PageIllustration />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
        <Header />
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
