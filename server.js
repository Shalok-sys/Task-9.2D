// Another folder named backend was created where the backend for this program was managed ->>>>> backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Stripe = require('stripe');


const stripe = Stripe(SECRET_KEY);

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
