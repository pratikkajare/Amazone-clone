import React from "react";
import Header from "./Header";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <>
      <Header />
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/L1headers/Cat-header-PC-Deals-on-clothing-1500x270.jpg"
            alt=""
          />
          <div>
            <h3>Hello, </h3>
            <span className="user__name">
              {!user ? "Guest" : user.email}
            </span>{" "}
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
