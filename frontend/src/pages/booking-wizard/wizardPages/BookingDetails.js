import React from 'react'
import { Item, BootstrapButton } from '../../../consts';
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";


function BookingDetails({ data, setData, total, setTotal, iterator, setIterator, page, setPage }) {
    const navigate = useNavigate();
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
                address: "",
            },
        ]);
        setIterator((i) => i + 1);
        setPage(0);
        navigate("/");
    };

    const nextPage = () => {
        setPage(() => page + 1);
    };

    const previousPage = () => {
        setPage(() => page - 1);
    };
    return (
        <React.Fragment>
            <h1>Booking Details</h1>
            {data.map((element, i) => (
                <React.Fragment>
                    <h3>TV {i + 1}</h3>
                    <Item>TV Size: <b>{element.tv_size}</b><div className='price'>${element.mount_price}</div></Item>
                    <Item>Bracket Type: <b>{element.bracket_type}</b><div className='price'>${element.bracket_price}</div></Item>
                    <Item>Placement: <b>{element.placement}</b></Item>
                    <Item>Wall Type: <b>{element.wall_type}</b><div className='price'>${element.wall_price}</div> </Item>
                    {element.cord_hide === 1 && <Item>Hide the Cord<div className='price'>$29</div></Item>}
                    {element.soundbar === 1 && <Item>Install Soundbar<div className='price'>$49</div></Item>}
                    {element.shelf === 1 === 1 && <Item>Install with Shelf<div className='price'>$49</div></Item>}
                    <br />
                </React.Fragment>
            ))}
            <div style={{ fontSize: '30px' }}>Total: <b>${total}</b></div>
            <br />
            <br />
            <Stack spacing={2} direction='row' justifyContent='center'>
                <BootstrapButton style={{ width: '40%', fontSize: '20px' }} onClick={addMore}>Add more</BootstrapButton>
                <BootstrapButton style={{ width: '40%', fontSize: '20px' }} onClick={previousPage}>Back</BootstrapButton>
                <BootstrapButton style={{ width: '40%', fontSize: '20px' }} onClick={nextPage}>Pay</BootstrapButton>
            </Stack>
        </React.Fragment>
    );
}

export default BookingDetails