import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from 'react-router-dom';
import Home from "./Pages/Home";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Home />
    )
  }
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);