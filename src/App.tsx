/*  This example demonstrates some of the core features of React Router
 *   including nested Routes, Outlets, Links, and using a "*" route (aka "splat route")
 *   to render a "not found" page when someone visits an unrecognized URL.
 */

import { Routes, Route } from "react-router-dom";

// Bring in the layout
import { Layout } from "./Layout";

// Bring in the pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NoMatch } from "./pages/NoMatch";

export default function App() {
  return (
    <>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
}
