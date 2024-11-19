import React from "react";
import Header from "./components/UI/Header";
import CartItems from "./components/Cart/CartItems";
import Button from "./components/UI/Button";
import Store from "./components/Store/Store";
import { CartProvider } from "./components/Cart/CartContext"

function App() {
 return(
  <>
  
<CartProvider>
  <Header/>
  <Store />
</CartProvider>
  
  
  </>
 )
}

export default App;
