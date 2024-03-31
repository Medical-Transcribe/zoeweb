import { useEffect, useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import load from './assets/load.gif';

const Payform = ({ clientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [paymentAttempted, setPaymentAttempted] = useState(false); // state to track payment attempt



    // useEffect hook to retrieve payment intent status
    useEffect(() => {
        // Check if stripe and clientSecret are available
        if (!stripe || !clientSecret) {
            return;
        }

        // Retrieve payment intent status
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            // Check payment status and update message accordingly
            if (paymentIntent.status === "succeeded") {
                setMessage("Payment succeeded!");
            } else if (paymentIntent.status === "processing") {
                setMessage("Your payment is processing.");
            } else if (paymentIntent.status === "requires_payment_method") {
                setMessage(paymentAttempted ? "Your payment was not successful, please try again." : null);
            } else {
                setMessage("Something went wrong.");
            }
        });
    }, [stripe, clientSecret, paymentAttempted]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: process.env.REACT_APP_SUCCESS_LINK,
            },
        });

        // This point will only be reached if there is an immediate error when
        // confirming the payment. Otherwise, your customer will be redirected to
        // your `return_url`.
        if (error && (error.type === "card_error" || error.type === "validation_error")) {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
        setPaymentAttempted(true);
    };

    const paymentElementOptions = {
        layout: "tabs"
    };

    return (
        <form id="payment-form" className=" mt-6" onSubmit={handleSubmit}>
            <PaymentElement className=" font-Afacad" id="payment-element" options={paymentElementOptions} />
            <button className=" w-full h-[45px] rounded-[36px] flex items-center justify-center bg-[#78C257] mt-3 font-Afacad text-center text-white text-base font-medium" disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                    {isLoading ? <img src={ load } className=" w-6" alt="" /> : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div className=" font-Afacad text-sm font-medium w-full text-left mt-3" id="payment-message">{message}</div>}
        </form>
    );
};

export default Payform;
