import React, { useEffect } from "react";
import styled from "styled-components";
import "./App.css";
// import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./fire";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Components/Orders";
import Address from "./Address";

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
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Amazone-clone" element={<Home />} />
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
          <Route exact path="/address" element={<Address />} />
          <Route exact path="/orders" element={<Orders />} />
        </Routes>

        {/* <Footer /> */}
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
