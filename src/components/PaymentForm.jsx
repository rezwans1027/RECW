import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../store/cart/CartSelector';
import { selectCurrentUser } from '../store/user/UserSelector';
import { clearCartItems } from '../store/cart/CartReducer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const paymentHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        if (!stripe || !elements) return;

        try {
            const response = await fetch('/.netlify/functions/CreatePaymentIntent', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ amount: amount * 100 })
            });
            const { paymentIntent } = await response.json();
            const clientSecret = paymentIntent.client_secret;

            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: {
                        name: currentUser ? currentUser.user.displayName : 'Guest'
                    }
                }
            });

            if (paymentResult.error) {
                setError(paymentResult.error.message);
            } else if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment successful');
                dispatch(clearCartItems());
                navigate('/confirmation')
            }
        } catch (error) {
            setError('An error occurred while processing the payment.');
        } finally {
            setIsLoading(false);
        }
    };

    const cardElementStyle = {
        base: {
            fontSize: '18px', // Adjust as needed
            /* Add more base styles here */
        },
    };

    return (
        <div className="m-auto border-black flex max-w-[700px] flex-col items-center justify-center rounded-md border-2 border-solid p-2 sm:p-8 shadow-2xl">
            <div className="mb-6 w-full">
                <h1 className="text-xl">Credit Card Payment:</h1>
            </div>
            <form onSubmit={paymentHandler} className='w-full flex flex-col'>
                <CardElement
                    className="stripe-card-element mb-20 w-full p-2"
                    options={{ style: cardElementStyle }}
                />
                {error && <div className="text-red-600 mb-4">{error}</div>}
                <button className="w-36 ml-auto rounded-md bg-green-600 p-2 text-xl text-white" type='submit' disabled={isLoading}>
                    {isLoading ? 'Processing...' : 'Pay Now'}
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;