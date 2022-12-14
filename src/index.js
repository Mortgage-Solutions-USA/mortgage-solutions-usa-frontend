/*!

=========================================================
* Now UI Kit PRO React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-pro-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/react-demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages

import Home from "views/Home.jsx";
import Loanfinder from "views/LoanFinder";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
      <Route path="/blog-posts" render={(props) => <BlogPosts {...props} />} />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route path="/e-commerce" render={(props) => <Ecommerce {...props} />} />
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      /> */}
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route path="/loans" render={(props) => <Loanfinder {...props} />} />
      {/* <Route path="/pricing" render={(props) => <Pricing {...props} />} />
      <Route
        path="/product-page"
        render={(props) => <ProductPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route path="/sections" render={(props) => <Sections {...props} />} />
      <Route path="/sign-up" render={(props) => <SignupPage {...props} />} /> */}
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
