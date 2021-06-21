import React from "react";
import { getCategory, getProductsCategory } from "../../services/Api";

import Product from "../../shared/components/product-item";
const CategoryPage = (props) => {
  const [category, setCategory] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [totalProducts, setTotalProducts] = React.useState(0);
  const id = props.match.params.id;
  React.useEffect(() => {
    // Get Category
    getCategory(id).then((res) => {
      // console.log(res.data.data);
      setCategory(res.data.data);
    });
    // Get Products By Category ID
    getProductsCategory(id).then((res) => {
      // console.log(res.data.data);
      setProducts(res.data.data.docs);

      // Get Total Product
      setTotalProducts(res.data.data.docs.length);
    });
  }, [id]);

  return (
    <>
      <div className="products">
        <h3>
          {category.name} {totalProducts}
        </h3>
        <div className="product-list card-deck">
          {products.map((product) => {
            return <Product item={product} />;
          })}
        </div>
      </div>
      {/*	End List Product	*/}
      <div id="pagination">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              Trang trước
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              Trang sau
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default CategoryPage;
