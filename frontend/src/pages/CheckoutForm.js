
import React, {useState} from 'react';
import axios from 'axios';
// MUI Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
// stripe
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// Util imports
import {makeStyles} from '@material-ui/core/styles';
// Custom Components

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      'color': '#32325d',
      'fontFamily': '"Helvetica Neue", Helvetica, sans-serif',
      'fontSmoothing': 'antialiased',
      'fontSize': '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '35vh auto',
  },
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

function CheckoutForm() {
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

    const res = await axios.post('http://localhost:3000/pay', {email: email});

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
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <TextField
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
        />
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        <div className={classes.div}>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>
            Pay
          </Button>
          <Button variant="contained" color="primary" className={classes.button}>
            Subscription
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CheckoutForm;