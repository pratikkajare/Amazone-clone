import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./fire";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";
import Orders from "./Orders";
// import InjectCheckout from "./InjectCheckout";

const promise = loadStripe(
  "pk_test_51KvMuZSE2Bi1ByoVo542v1cXi6Ggsahxs2ud45kypMXxe7tUPcIyBnK5YWRpP86aJ5LJgA7WiV1tayT2URKJ111i00mBpoSLRv"
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />

        {/* <InjectCheckout /> */}
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />

          <Route path="/orders" element={<Orders />} />
          <Route path="/order" element={<Order />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
