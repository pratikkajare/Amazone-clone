import React, { CardComponent } from "react";
import { ElementsConsumer } from "@stripe/react-stripe-js";

export default function InjectCheckout() {
  return (
    <ElementsConsumer>
      {({ stripe, elements }) => (
        <CardComponent stripe={stripe} elements={elements} />
      )}
    </ElementsConsumer>
  );
}
