import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useNavigate } from "react-router-dom";

const Subtotal = () => {
  const history = useNavigate();
  const [{ basket }] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):<strong> {value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This Order Containes A Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"\u20A8"}
      />
      <button
        onClick={(e) => history("/address")}
        disabled={basket.length === 0}
        style={{ cursor: basket.length === 0 ? "default" : "pointer" }}
      >
        {basket.length === 0 ? <p>Empty Cart</p> : "Proceed To Checkout"}
      </button>
    </div>
  );
};

export default Subtotal;
