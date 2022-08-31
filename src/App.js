import { Fragment , useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";

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
    <Fragment>
      {showCart && <Cart hideCart = {hideCartHandler}/>}
      <Header showCart = {showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
