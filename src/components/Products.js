//Others
import React, { useContext } from "react";

//Context
import ProductContext from "../contexts/ProductContext";

// Components
import Product from "./Product";

const Products = () => {
  const { products, addItem } = useContext(ProductContext);
  //checking what products are returned...
  console.log("gg: product return: ", products);

  return (
    <div className="products-container">
      {products.map(product => (
        <Product key={product.id} product={product} addItem={addItem} />
      ))}
    </div>
  );
};

export default Products;
