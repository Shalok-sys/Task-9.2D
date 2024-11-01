// src/App.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './CheckoutPage';

const stripePromise = loadStripe('pk_test_51QFetAJN1WGEDgJeuNB3XS6crT4nlyJcSjPLRSpvlcChkVgEeRwuXBh7EsBdhnYcrMKX1lipHQkgSYiOBm4sD4Or00UWwt3Cki'); // Replace with your public key

const Premium = () => {
  return (
    <Elements stripe={stripePromise}>
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <PaymentForm />
      </div>
    </Elements>
  );
};

export default Premium;
