import React from "react";
import Header from "./components/UI/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./components/Store/Store";
import { CartProvider } from "./components/Cart/CartContext";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/store", element: <Store /> },
  {path:"about",element:<About/>}
]);

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <RouterProvider router={router} />
      </CartProvider>
    </>
  );
}

export default App;
