const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51KvMuZSE2Bi1ByoVtItD5HcXltZXso8MUYK0JNm7Ek4YNqZLdLs6dQJbxpfkxmDn2LOn3pMwnqdp5aiAROaGKOcO00rStnX7oh"
);
//API

//App Config
const app = express();
//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Lisetn Command
exports.api = functions.https.onRequest(app);

//Example Endpoint
//http://localhost:5001/estore-data/us-central1/api
