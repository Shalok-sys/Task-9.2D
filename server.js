// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Stripe = require('stripe');


const stripe = Stripe('sk_test_51QFetAJN1WGEDgJelsFJWGKm8RspBDbI6wBoc1gat1d1PCn4LBUhNfQAD1jMyXuzH35Lr6vDvWOmB3Z8jlk3WFho00mP8eXgeh'); // Replace with your secret key

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body; // Amount in cents

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd', // Specify your currency
      payment_method_types: ['card'],
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
