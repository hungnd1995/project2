import Http from "./Http";

export const getProducts = (config) => {
  return Http.get("/products", config);
};

export const getCategories = (config) => {
  return Http.get("./categories", config);
};

export const getCategory = (id, config) => {
  return Http.get(`/categories/${id}`, config);
};
export const getProductsCategory = (id, config) => {
  return Http.get(`/categories/${id}/products`);
};

export const getProduct = (id, config) => {
  return Http.get(`/products/${id}`, config);
};

export const getCommentsProduct = (id, config) => {
  return Http.get(`./products/${id}/comments`, config);
};
export const postComment = (id, data, config) => {
  return Http.post(`./products/${id}/comments`, data, config);
};
// b1 viet api cho categories (app.js)
// b2 import data  categories cho page can su during(app.js)
// b3 khai bao state  (app.js)
// b4 cap nhat state voi data duoc lay tu api (app.js)
// b5 day data tu api sang menu (app.js)
// b6 hoan thien menu tu data dc day sang  (menu.js)
