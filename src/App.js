import { Fragment , useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [showCart , setCartIsShown] = useState(false)
  const hideCartHandler = (e) => {
    e.preventDefault();
    setCartIsShown(false)
  }
  const showCartHandler = (e) => {
    e.preventDefault();
    setCartIsShown(true)
  }
  return (
    <CartProvider>
      {showCart && <Cart hideCart = {hideCartHandler}/>}
      <Header showCart = {showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
