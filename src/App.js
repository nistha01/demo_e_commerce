import React from "react";
import Header from "./components/UI/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./components/Store/Store";
import { CartProvider } from "./components/Cart/CartContext";
import { ModalProvider } from "./components/Movies/ModalContext";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />, 
    children: [
      { path: "home", element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "movies", element: <Movies /> },
      { path: "", element: <Home /> },
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <ModalProvider>
        <RouterProvider router={router} />
      </ModalProvider>
    </CartProvider>
  );
}

export default App;
