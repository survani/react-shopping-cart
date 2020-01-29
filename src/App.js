import React, { useState } from "react";
import { Route } from "react-router-dom";
import data from "./data";

//Context
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  //states
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  //adds item to cart
  const addItem = item => {
    //item = the specific item when it is added to cart...
    console.log("gg: Check item: ", item);

    // add the given item to the cart
    setCart([...cart, item]);
  };

  return (
    <div className="App">
      {/* Context.Provider used here to remove prop drilling */}
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart }}>
          <Navigation cart={cart} />

          {/* ROUTES BELOW: Using Context Api now */}
          <Route exact path="/" component={Products} />
          <Route path="/cart" component={ShoppingCart} />
          {/* ROUTES ABOVE: Using Context Api now */}
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default App;
