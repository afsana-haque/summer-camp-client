import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';

const CheckoutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const { user, nextYear } = useContext(AuthContext);
    const [cardError, setError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    useEffect(() => {
        if (price > 0) {
          axiosSecure.post("/create-payment-intent", { price }).then((res) => {
            console.log(res.data.clientSecret);
            setClientSecret(res.data.clientSecret);
          });
        }
      }, [axiosSecure, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
          return;
        }
        const card = elements.getElement(CardElement);
        console.log(card);
        if (card === null) {
          return;
        }
    
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: "card",
          card,
        });
        if (error) {
          console.log("error", error);
          setError(error.message);
        } else {
          console.log(paymentMethod);
          setError("");
        }
        setProcessing(true);
        const { paymentIntent, error: confirmError } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: card,
              billing_details: {
                name: user?.displayName || "unKnown",
                email: user?.email || "anonymous",
              },
            },
          });
        if (confirmError) {
          console.log(confirmError.message);
        }
        setProcessing(false);
        if (paymentIntent.status === "succeeded") {
          setTransactionId(paymentIntent.id);
          // payment info save to the server
          const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            quantity: cart.length,
            status: "Enrolled",
            selectedCourse: cart.map((course) => course._id),
            coursesName: cart.map((course) => course.name),
            coursesId: cart.map((course) => course._id),
          };
          axiosSecure.post("/payments", payment).then((res) => {
            console.log(res.data);
            if (res.data.insertedResult) {
              // payment info updated
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Enrolled Successful! Trans id is : ${paymentIntent.id} `,
                showConfirmButton: false,
              });
            }
          });
        }
      };

    return (
        <form className='w-2/3 m-8' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
         <p className="font-bold text-red-600 bg-white">{cardError}</p>
        <button className="btn btn-warning bg-orange-800 text-white mt-5" type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>
    );
};

export default CheckoutForm;