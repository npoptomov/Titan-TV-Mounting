const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors = require('cors')

var Publishable_Key = 'pk_test_51L29o5HFrjVwv18SiO2ZVX1Qo4NHxO9sjpNE5ttxKfS0R8brTTJHqG3HnkqkwjwsyZm2zgUErTh2I75DeOLVmRbM00H7GIlkut';
var Secret_Key = 'sk_test_51L29o5HFrjVwv18SiSmWMUgRFlPYCFsdFykh8XkKhWPznw7L4d7bbYobMgqH1n9sUJJCaLrSiuSybN0Cv7i7xmk500vAnxQo81';

const stripe = require('stripe')(Secret_Key);

const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());


app.get('/', function(req, res) {
    res.send('Hello');
  });


app.post('/pay', async function(req, res) {
    const {email, amount} = req.body;
    
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100,
        currency: 'usd',
        // Verify your integration in this guide by including this parameter
        metadata: {integration_check: 'accept_a_payment'},
        receipt_email: email,
      });

      res.json({'client_secret': paymentIntent['client_secret']})
})

app.listen(port, function (error) {
    if (error) throw error
    console.log("Server created Successfully")
});
