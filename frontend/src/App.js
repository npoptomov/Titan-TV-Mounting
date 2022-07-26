import React, { useState } from 'react';
import './App.css';
import Wizard from './pages/booking-wizard/Wizard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from './pages/Checkout';
import CheckoutForm from './pages/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements
} from '@stripe/react-stripe-js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [page, setPage] = useState(0);

  const [data, setData] = useState([{
    tv_size: "",
    mount_price: 0,
    bracket_type: "",
    bracket_price: 0,
    placement: "",
    wall_type: "",
    wall_price: 35,
    cord_hide: 0,
    cord_price: 29,
    soundbar: 0,
    soundbar_price: 49,
    shelf: 0,
    shelf_price: 49,
    first_name: "",
    last_name: "",
    address: "",
  }]);

  const [total, setTotal] = useState(0);

  const [iterator, setIterator] = useState(0);

  const stripePromise = loadStripe('pk_test_51L29o5HFrjVwv18SiO2ZVX1Qo4NHxO9sjpNE5ttxKfS0R8brTTJHqG3HnkqkwjwsyZm2zgUErTh2I75DeOLVmRbM00H7GIlkut');

  return (

      <div className="App">
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Wizard data={data} setData={setData} total={total} setTotal={setTotal} iterator={iterator} setIterator={setIterator} page={page} setPage={setPage} />} />
              <Route path="/checkout" element={<Checkout data={data} setData={setData} total={total} setTotal={setTotal} iterator={iterator} setIterator={setIterator} page={page} setPage={setPage} />} />
              <Route path="/payment" element={<CheckoutForm data={data} setData={setData} total={total} setTotal={setTotal} page={page} setPage={setPage} />} />
            </Routes>
          </BrowserRouter>
        </Elements>
      </div>

  );
}

export default App;
