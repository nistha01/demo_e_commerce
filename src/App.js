import React, { useContext } from "react";
import Header from "./components/UI/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./components/Store/Store";
import { CartProvider } from "./components/Cart/CartContext";
import { ModalProvider } from "./components/Movies/ModalContext";
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Auth from "./components/Authentication/Auth";
import AuthProvider, { AuthContext } from "./components/Authentication/AuthContext";

const AppRouter = () => {
  const { loggedIn } = useContext(AuthContext); // Accessing Auth context

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: loggedIn
        ? [
            { path: "home", element: <Home /> },
            { path: "store", element: <Store /> },
            { path: "movies", element: <Movies /> },
            { path: "", element: <Home /> },
          ]
        : [
            { path: "", element: <Auth /> },// Redirect to Auth when not logged in
            { path: "login", element: <Auth /> },
            { path: "store", element: <Auth /> },
            { path: "movies", element: <Auth /> },
            { path: "about", element: <Auth /> },
            { path: "home", element: <Auth /> }
          ],
    },
  ]);

  return <RouterProvider router={router} />;
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ModalProvider>
          <AppRouter /> {/* Use the AppRouter component */}
        </ModalProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
