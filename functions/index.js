// Import Libraries
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.SECRET_KEY);
// API

// App Config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API Routes [http://127.0.0.1:5001/clone-22598/us-central1/api]
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log(`Payment Request Received : ${total}`);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  // Ok - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command
exports.api = functions.https.onRequest(app);
