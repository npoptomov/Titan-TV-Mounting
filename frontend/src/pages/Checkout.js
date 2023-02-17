import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Name from "./booking-wizard/wizardPages/Name";
import Address from "./booking-wizard/wizardPages/Address";
import CheckoutForm from "./CheckoutForm";
import { BootstrapButton } from "../consts";
import { Stack } from "@mui/material";
import BookingDetails from "./booking-wizard/wizardPages/BookingDetails";
import Extras from "./booking-wizard/wizardPages/Extras";

function Checkout({ data, setData, total, iterator, setIterator, page, setPage }) {
  const navigate = useNavigate();

  const [name, setName] = useState({
    first_name: "",
    last_name: "",
  });

  const [address, setAddress] = useState("");

  const nextPage = () => {
    setPage(() => page + 1);
  };

  const previousPage = () => {
    setPage(() => page - 1);
  };

  const pageDisplay = () => {
    if (page === 5 && iterator === 0) return (
      <Stack spacing={10} direction='column' justifyContent='center'>
        <Name name={name} setName={setName} />
        <Stack spacing={2} direction='row' justifyContent='center'>
          {/* <BootstrapButton style={{ width: '40%', fontSize: '20px' }} onClick={previousPage}>Back</BootstrapButton> */}
          <BootstrapButton style={{ width: '40%', fontSize: '20px' }} onClick={nextPage}>Next</BootstrapButton>
        </Stack>
      </Stack>
    );
    else if (page === 5 && iterator != 0)
      setPage(() => page + 2)
    else if (page === 6 && iterator === 0)
      return (
        <Stack spacing={10} direction='column' justifyContent='center'>
          <Address address={address} setAddress={setAddress} />
          <Stack spacing={2} direction='row' justifyContent='center'>
            <BootstrapButton style={{ width: '40%', fontSize: '20px' }} onClick={previousPage}>Back</BootstrapButton>
            <BootstrapButton style={{ width: '40%', fontSize: '20px' }} onClick={nextPage}>Next</BootstrapButton>
          </Stack>
        </Stack>);
    else if (page === 7)
      return (<BookingDetails data={data} setData={setData} total={total} iterator={iterator} setIterator={setIterator} page={page} setPage={setPage} />);
    else if (page === 8)
      navigate('/payment');
  };

  return (
    <Stack spacing={0.33} textAlign="left" width={{ xs: "80%", md: "30%" }} >
      {pageDisplay()}
    </Stack>
  );
}

export default Checkout;
