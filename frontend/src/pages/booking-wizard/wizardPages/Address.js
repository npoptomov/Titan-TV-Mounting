import React from "react";

function Address({ address, setAddress }) {
  return (
    <div>
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
    </div>
  );
}

export default Address;
