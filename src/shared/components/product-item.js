import React from "react";
import { getImageProduct } from "../ultils";

const Product = ({ item }) => {
  return (
    <div className="product-item card text-center">
      <a href={`/product-details-${item._id}`}>
        <img src={getImageProduct(item.image)} />
      </a>
      <h4>
        <a href={`/product-details-${item._id}`}>{item.name}</a>
      </h4>
      <p>
        Giá Bán: <span>{item.price}d</span>
      </p>
    </div>
  );
};
export default Product;

// B1 gan url de toi page product (bao gom  ca id)
// B2 hoan thien route cho page product
// B3 viet api lay ra mot san pham duy nhat theo id truyen vao
// B4 import data
// B5 xay dung  state
// B6 cap nhat du lieu cho state
// B7 render du lieu chi tiet san pham
