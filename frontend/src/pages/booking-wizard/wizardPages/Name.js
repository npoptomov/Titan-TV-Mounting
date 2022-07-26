import React from "react";

function Name({name, setName}) {

  return (
    <div>
      <label htmlFor="text">First name</label>
      <input
        type="text"
        name="first_name"
        placeholder="First name"
        value={name.first_name}
        onChange={(event) => {
          setName({ ...name, first_name: event.target.value });
        }}
      />
      <br />
      <label htmlFor="text">Last name</label>
      <input
        type="text"
        name="last_name"
        placeholder="Last name"
        value={name.last_name}
        onChange={(event) => {
          setName({ ...name, last_name: event.target.value });
        }}
      />
    </div>
  );
}

export default Name;
