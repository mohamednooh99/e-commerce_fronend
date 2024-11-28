"use client";

import React, { useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./_component/CheckoutForm";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function CheckoutContent() {
  const searchParams = useSearchParams();
  const amount = Number(searchParams.get("amount")) || 0;

  const options = {
    mode: "payment",
    currency: "usd",
    amount: amount * 100,
  };

  useEffect(() => {
    document.title = `Elessi Checkout Products`;
  }, []);

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm amount={amount} />
    </Elements>
  );
}

export default function Checkout() {
  return (
    <React.Suspense fallback={<div>Loading checkout...</div>}>
      <CheckoutContent />
    </React.Suspense>
  );
}
