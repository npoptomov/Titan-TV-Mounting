import React from "react";
import Box from '@mui/material/Box';
import { Stack } from "@mui/material";
import { CssTextField } from "../../../consts";

function Name({ name, setName, page, setPage }) {

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >

      <Stack alignItems='center'>
        <h1>Enter your details</h1>
        <CssTextField
          required
          id="outlined-required"
          label="First Name"
          value={name.first_name}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          InputProps={{
            style: {
              color: 'white'
            }
          }}
          onChange={(event) => {
            setName({ ...name, first_name: event.target.value });
          }}
        />

        <CssTextField
          required
          id="outlined-required"
          label="Last Name"
          value={name.last_name}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          InputProps={{
            style: {
              color: 'white'
            }
          }}
          onChange={(event) => {
            setName({ ...name, last_name: event.target.value });
          }}
        />


      </Stack>
    </Box>
  );
}

export default Name;
