import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/index.tsx";
import Encrypt from "./pages/encrypt.tsx";
import Decrypt from "./pages/decrypt.tsx";
import Navbar from "./components/fragments/Navbar.tsx";
import Footer from "./components/fragments/Footer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/encrypt",
    element: <Encrypt />,
  },
  {
    path: "/decrypt",
    element: <Decrypt />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <main>
      <RouterProvider router={router} />
    </main>
    <Footer />
  </React.StrictMode>
);
