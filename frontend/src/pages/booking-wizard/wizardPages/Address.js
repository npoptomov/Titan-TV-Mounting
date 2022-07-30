import React from "react";
import { CssTextField } from "../../../consts";
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import LocationSearchInput from "../../../components/LocationSearchInput";


function Address({ address, setAddress }) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Stack alignItems='center'>
        <h1>Enter your Address</h1>
        <br />
        <LocationSearchInput address={address} setAddress={setAddress}></LocationSearchInput>
      </Stack>
    </Box>


  );
}

export default Address;
