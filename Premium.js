// src/App.js
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './CheckoutPage';

const stripePromise = loadStripe('PUBLISHABLE_API_KEY'); 

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
