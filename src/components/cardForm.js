import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useContext, useState } from "react";
import load from './assets/load.gif';
import { AuthContext } from "../contexts/contextprovider";

const CardForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [loading, setLoading] = useState(false); // Track loading state
    const { getCookie } = useContext(AuthContext);
    const accessToken = getCookie('accessToken');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!stripe || !elements || loading) {
            return; // Stripe.js has not yet loaded or already loading
        }

        setLoading(true); // Set loading state to true

        try {
            // Create payment method
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
            });

            if (error) {
                console.error('Error creating payment method:', error);
                setErrorMessage(error.message);
                setLoading(false); // Reset loading state
                return;
            }

            // Send payment method to backend for subscription creation
            console.log('Card added successfully:', paymentMethod.id)
            // Handle subscription creation in the parent component or send another API request here

            // Reset error and loading state after successful payment
            setErrorMessage('Card added successfully');

            // Send payment method ID to the backend
            const response = await fetch('https://dev-api.zoemed.ai/api/v1/set-payment-methods', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    paymentMethodId: paymentMethod.id
                })
            });

            if (!response.ok) {
                throw new Error('Failed to set payment method');
            }

            // Log the response if the request is successful
            const responseData = await response.json();
            console.log('Payment method set successfully:', responseData);

            // Reset loading state after successful payment method set
            setLoading(false);

            // Optionally handle success here
        } catch (error) {
            console.error('Error creating payment method:', error);
            setErrorMessage('An error occurred while processing your payment');
            setLoading(false); // Reset loading state
        }
    };

    return ( 
        <>
        <form className="mt-6" onSubmit={handleSubmit}>
            <CardElement />
            <button className="w-full h-[45px] rounded-[36px] flex items-center justify-center bg-[#78C257] mt-6 font-Afacad text-center text-white text-base font-medium" type="submit" disabled={!stripe || loading}>
                {loading ? (
                    <img src={load} alt="Loading" className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                    "Pay"
                )}
            </button>
            {errorMessage && <div className="font-Afacad text-sm font-medium w-full text-left mt-3">{errorMessage}</div>}
        </form>
        </>
     );
}
 
export default CardForm;
