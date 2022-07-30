import React, { useState } from "react";
import PlacesAutocomplete, {
} from 'react-places-autocomplete';
import { CssTextField } from "../consts";
import Stack from "@mui/material/Stack";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1A2027',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  fontSize: "18px",
  textAlign: 'left',
  color: '#fff'
}));

function LocationSearchInput({address, setAddress}) {
  const handleSelect = address => {
    setAddress(address);
  };

  const handleChange = address => {
    setAddress(address);
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      style={{ width: '100%' }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <React.Fragment>
          <CssTextField
            required
            id="outlined-required"
            label="Address"
            value={address}
            fullWidth
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{
              style: {
                color: 'white'
              }
            }}
            {...getInputProps({
              className: 'location-search-input',
            })}
          />
          <Stack spacing={0.3} className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              const className = suggestion.active
                ? 'suggestion-item--active'
                : 'suggestion-item';
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { color: '#7D1DFF', backgroundColor: 'white', cursor: 'pointer' }
                : { color: '#fff', backgroundColor: '', cursor: 'pointer' };
              return (
                <Item
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <b>{suggestion.description}</b>
                </Item>
              );
            })}
          </Stack>
        </React.Fragment>
      )}
    </PlacesAutocomplete>
  );
}

export default LocationSearchInput;

