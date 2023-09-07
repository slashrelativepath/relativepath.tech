/*  This example demonstrates some of the core features of React Router
 *   including nested Routes, Outlets, Links, and using a "*" route (aka "splat route")
 *   to render a "not found" page when someone visits an unrecognized URL.
 */

import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Bring in the layout
import { Layout } from "./Layout";

// Bring in the pages
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NoMatch } from "./pages/NoMatch";

// Create a router
const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      { path: "about", Component: About },
      { path: "*", Component: NoMatch },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
