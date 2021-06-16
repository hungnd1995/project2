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

function App() {
  return (
    <div>
      <Header />
      {/*	End Header	*/}
      {/*	Body	*/}
      <div id="body">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <Menu />
            </div>
          </div>
          <div className="row">
            <div id="main" className="col-lg-8 col-md-12 col-sm-12">
              {/*	Slider	*/}
              <Slider />
              {/*	End Slider	*/}
              {/*	Feature Product	*/}

              <BrowserRouter>
                <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/category" component={CategoryPage} />
                  <Route
                    path="/product-details"
                    component={ProductDetailsPage}
                  />
                  <Route path="/search" component={SearchPage} />
                  <Route path="/cart" component={CartPage} />
                  <Route path="/success" component={SuccessPage} />
                  <Route component={NotFound} />
                </Switch>
              </BrowserRouter>

              {/*	End Latest Product	*/}
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
      {/*	End Body	*/}
      <Footer />
    </div>
  );
}

export default App;
