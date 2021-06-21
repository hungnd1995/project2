import React from "react";
import { getImageProduct } from "../ultils";

const Product = ({ item }) => {
  return (
    <div className="product-item card text-center">
      <a href="#">
        <img src={getImageProduct(item.image)} />
      </a>
      <h4>
        <a href="#">{item.name}</a>
      </h4>
      <p>
        Giá Bán: <span>{item.price}d</span>
      </p>
    </div>
  );
};
export default Product;
