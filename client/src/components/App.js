import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home.js";
import Navbar from "./NavBar.js";
import Signup from "./SignUp.js";
import Login from "./Login.js";
import Products from "./Products";
import ProductCard from "./ProductCards.js";
import Cart from "./Cart.js";
import { UserContext, UserProvider } from "./UserContext.js";
import ProductDetail from "./ProductDetail.js";
import OrderComplete from "./OrderComplete.js";
import OrderCancelled from "./Cancel.js";
import Loading from "./Loading.js";
import FeaturedProducts from "./FeaturedProducts.js";
import LipMakeup from "./LipMakeup.js";
import EyeMakeup from "./EyeMakeup.js";
import FaceMakeup from "./FaceMakeup.js";
import PastOrders from "./PastOrders.js";




function App() {

  const { setUser } = useContext(UserContext);

  //  products state:
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    // auto-login
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      fetch("/checksession").then((r) => {
        if (r.ok && r.headers.get("Content-Length") !== "0") {
          return r.json();
        }
        throw new Error("No content");
      })
      .then((user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        console.log("Fetch error:", error.message);
      });
    }
  }, [setUser]);

  useEffect(() => {
    fetch("/products").then((r) => r.json()).then(setProducts);
  }, []);

  let productCards = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products"element={<Products productCards={productCards} />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path = "/order-complete" element={<OrderComplete />}/>
          <Route path = "/cancel" element={<OrderCancelled />}/>
          <Route path = "/loading" element={<Loading />}/>
          <Route path="/featured-products" element={<FeaturedProducts />} />
          <Route path="/lip" element={<LipMakeup />}/>
          <Route path="/eye" element={<EyeMakeup />}/>
          <Route path="/face" element={<FaceMakeup />}/>
          <Route path="/past-orders" element={<PastOrders />} />
        </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  );
}



