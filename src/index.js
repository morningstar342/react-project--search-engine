import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// React Rounter Additions MS (Look Down)
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages MS
import Home from "./pages/home";
import Page2 from "./pages/page2";
// import Page2 from "./pages/Page2";

// Router imported 1.0
const router = createBrowserRouter([
  {
    // Add path + elements from pages imported MS
    path: "/",
    element: <Home />,
    errorElement: (
      <h1>Sorry No Such Page or Any Imported Design like 'Error404'</h1>
    ),
  },
  {
    path: "/page2",
    element: <Page2 />,
    errorElement: (
      <h1>Sorry No Such Page or Any Imported Design like 'Error404'</h1>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Router imported 2.0 MS */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
