import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from 'react-router-dom';
import Home from "./Pages/Home";
import Product  from "./Pages/Product";

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Home />  
    )
  },
  {
    path: '/product/:id',
    element: (
      <Product />
    )
  }
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);