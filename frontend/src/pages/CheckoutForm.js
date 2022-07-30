
import React, { useState } from 'react';
import axios from 'axios';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { makeStyles } from '@material-ui/core/styles';
import { BootstrapButton, CssTextField } from '../consts';
import { Stack } from '@mui/material';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      'color': '#fff',
      'fontFamily': '"Helvetica Neue", Helvetica, sans-serif',
      'fontSmoothing': 'antialiased',
      'fontSize': '16px',
      '::helper-text': {
        color: '#fff',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const useStyles = makeStyles({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
  },
  button: {
    margin: '2em auto 1em',
  },
});

function CheckoutForm({ total }) {
  const classes = useStyles();
  // State
  const [email, setEmail] = useState('');

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const res = await axios.post('http://localhost:3000/pay', { email: email, amount: total });

    const clientSecret = res.data['client_secret'];

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        },
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Money is in the bank!');
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
      }
    }
  };

  return (
    <Stack width={{ xs: "80%", md: "20%" }} >
      <h1>Enter your payment details</h1>
      <CssTextField
        label='Email'
        id='outlined-email-input'
        helperText={`Email you'll recive updates and receipts on`}
        margin='normal'
        variant='outlined'
        type='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        InputProps={{
          style: {
            color: 'white'
          }
        }}
      />
      <br />
      <CardElement options={CARD_ELEMENT_OPTIONS} />
<br /> <br />
        <BootstrapButton className={classes.button} onClick={handleSubmit}>
          Pay
        </BootstrapButton>

    </Stack>
  );
}

export default CheckoutForm;