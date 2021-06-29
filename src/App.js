import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import Slider from "./shared/components/Layout/Slider";
import Sidebar from "./shared/components/Layout/Sidebar";
import Footer from "./shared/components/Layout/Footer";

import HomePage from "./pages/Home";
import CategoryPage from "./pages/Category";
import ProductDetailsPage from "./pages/ProductDetails";
import SearchPage from "./pages/Search";
import CartPage from "./pages/Cart";
import SuccessPage from "./pages/Success";
import NotFound from "./pages/NotFound";

import { getCategories } from "./services/Api";

function App() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    getCategories({}).then((res) => {
      setCategories(res.data.data.docs);
    });
  }, []);
  return (
    <div>
      ]
      <BrowserRouter>
        <Header />
        {/*	End Header	*/}
        {/*	Body	*/}
        <div id="body">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <Menu item={categories} />
              </div>
            </div>
            <div className="row">
              <div id="main" className="col-lg-8 col-md-12 col-sm-12">
                {/*	Slider	*/}
                <Slider />
                {/*	End Slider	*/}
                {/*	Feature Product	*/}

                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route exact path="/category-:id" component={CategoryPage} />
                  <Route
                    exact
                    path="/product-details-:id"
                    component={ProductDetailsPage}
                  />
                  <Route exact path="/search" component={SearchPage} />
                  <Route exact path="/cart" exact component={CartPage} />
                  <Route exact path="/success" component={SuccessPage} />
                  <Route component={NotFound} />
                </Switch>

                {/*	End Latest Product	*/}
              </div>
              <Sidebar />
            </div>
          </div>
        </div>
        {/*	End Body	*/}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
