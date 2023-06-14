import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../hooks/useCart';


const Payment = () => {
    const [cart] = useCart();

    const total = cart?.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
    return (
        <div className='w-full px-20 '>
            <h2 className='text-3xl font-semibold text-center my-12'>Payment</h2>
            <Elements stripe={stripePromise}>
            <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;