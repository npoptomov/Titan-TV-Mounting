import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Name from "./booking-wizard/wizardPages/Name";
import Address from "./booking-wizard/wizardPages/Address";
import CheckoutForm from "./CheckoutForm";
import BootstrapButton from "../consts";

function Checkout({ data, setData, total, iterator, setIterator, page, setPage }) {
  const navigate = useNavigate();

  const [name, setName] = useState({
    first_name: "",
    last_name: "",
  });

  const [address, setAddress] = useState("");

  const addMore = () => {
    setData((oldState) => [
      ...oldState,
      {
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
      },
    ]);
    setIterator((i) => i + 1);
    setPage(0);
    navigate("/");
  };

  const nextPage = () => {
    setPage(page => page + 1);
  };

  const pageDisplay = () => {
    if (page === 5)
      return (
        <div>
          <h1>Booking Details</h1>
          {data.map((element, i) => (
            <div>
              <h3>TV {i + 1}</h3>
              <div>{element.tv_size}: ${element.mount_price}</div>
              <div>{element.bracket_type}: ${element.bracket_price}</div>
              <div>{element.placement}</div>
              <div>{element.wall_type}: ${element.wall_price}</div>
              <div>{element.cord_hide === 1 ? "Hide the cable: $29" : ""}</div>
              <div>{element.soundbar === 1 ? "Install Soundbar: $49" : ""}</div>
              <div>{element.shelf === 1 ? "Install with Shelf: $49" : ""}</div>
              <br />
            </div>
          ))}
          <div>Total: ${total}</div>
          <BootstrapButton onClick={addMore}>Add more</BootstrapButton>
        </div>
      );
    else if (page === 6) return <Name name={name} setName={setName} />;
    else if (page === 7)
      return <Address address={address} setAddress={setAddress} />;
    else if (page === 8)
      navigate('/payment');
  };

  return (
    <div>
      {pageDisplay()}
      <BootstrapButton onClick={nextPage}>{page === 7 ? "Pay" : "Next"}</BootstrapButton>
    </div>
  );
}

export default Checkout;
