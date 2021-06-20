const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const stripe = require("stripe")(process.env.SECRET_KEY)

const app = express()

app.use(cors({ origin: true }))
app.use(express.json())

app.get("/", (req, res) => {
  res.status(200).send("Hello World")
})

app.post("/payment/create", getTotal)

app.listen(5000)

async function getTotal(req, res) {
  const total = req.query.total
  console.log(`Payment Request Received : ${total}`)

  if (total >= 1) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "inr",
    })

    // Ok - Created
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    })
  } else {
    res.status(400).send("Amount must be greater than or equal to 1")
  }
}
