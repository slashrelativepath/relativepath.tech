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
// import { DataRoute } from "./pages/DataRoute";
import { NoMatch } from "./pages/NoMatch";

// Create a router
const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: Home },
      // { path: "/about", Component: About },
      // { path: "/contact", Component: Contact },

      // A data route is a route that has a data loader function
      // that will be called when the route is rendered.
      // Although the data loader function is async, it is not
      // required to be async. It can return a promise or a value.
      // {
      //   path: "/data-route",
      //   Component: DataRoute,
      //   loader: () => ({ message: "Hello Data!" }),
      // },
      { path: "*", Component: NoMatch },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}
