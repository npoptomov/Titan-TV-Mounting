import { Navbar } from './components/Navbar';
import React, { useState } from 'react';
import './App.css';
import Wizard from './pages/booking-wizard/Wizard';
import { Routes, Route, useNavigate } from "react-router-dom";
import Checkout from './pages/Checkout';
import CheckoutForm from './pages/CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements
} from '@stripe/react-stripe-js';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import HomePage from './pages/HomePage';
import { Grid } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#1A2027'
  },
}));

function App() {
  const [page, setPage] = useState(0);

  const [data, setData] = useState([{
    tv_size: "",
    mount_price: 0,
    bracket_type: "",
    bracket_price: 0,
    placement: "",
    wall_type: "",
    wall_price: 0,
    cord_hide: 0,
    cord_price: 29,
    soundbar: 0,
    soundbar_price: 49,
    shelf: 0,
    shelf_price: 49,
    address: "",
  }]);

  const [total, setTotal] = useState(0);

  const [iterator, setIterator] = useState(0);

  const stripePromise = loadStripe('pk_test_51L29o5HFrjVwv18SiO2ZVX1Qo4NHxO9sjpNE5ttxKfS0R8brTTJHqG3HnkqkwjwsyZm2zgUErTh2I75DeOLVmRbM00H7GIlkut');

  return (
    <div className="App">
      <BorderLinearProgress variant="determinate" value={page * 12}></BorderLinearProgress>
      <Grid container direction="column" alignItems="center" >
        <Navbar/>
        <Elements stripe={stripePromise}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<Wizard data={data} setData={setData} total={total} setTotal={setTotal} iterator={iterator} setIterator={setIterator} page={page} setPage={setPage} />} />
            <Route path="/checkout" element={<Checkout data={data} setData={setData} total={total} setTotal={setTotal} iterator={iterator} setIterator={setIterator} page={page} setPage={setPage} />} />
            <Route path="/payment" element={<CheckoutForm data={data} setData={setData} total={total} setTotal={setTotal} page={page} setPage={setPage} />} />
          </Routes>
        </Elements>
      </Grid>
    </div>

  );
}

export default App;
