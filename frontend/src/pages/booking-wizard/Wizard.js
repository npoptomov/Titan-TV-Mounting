import React, { useState } from 'react';
import TvSize from './wizardPages/TvSize';
import BracketType from './wizardPages/BracketType';
import Placement from './wizardPages/Placement';
import WallType from './wizardPages/WallType';
import Extras from './wizardPages/Extras';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";
import BootstrapButton from '../../consts';



function Wizard({ data, setData, total, setTotal, iterator, setIterator, page, setPage }) {
    const navigate = useNavigate();

    const question = [
        "What is the size of your TV device?",
        "What is the type of the bracket you want to use?",
        "Where do you want to place the TV?",
        "What is the material of your wall?",
        "Do you want to add extra services?",
        "Please enter your name",
        "Please enter your address below"
    ];

    const next = () => {
        setPage((page) => page + 1);
    }

    const previous = () => {
        setPage((page) => page - 1);
    }

    const pageDisplay = (page) => {
        if (page === 0)
            return <TvSize data={data} setData={setData} total={total} setTotal={setTotal} iterator={iterator} page={page} setPage={setPage} />
        else if (page === 1)
            return <BracketType data={data} setData={setData} total={total} setTotal={setTotal} iterator={iterator} page={page} setPage={setPage} />
        else if (page === 2)
            return <Placement data={data} setData={setData} total={total} setTotal={setTotal} iterator={iterator} page={page} setPage={setPage} />
        else if (page === 3)
            return <WallType data={data} setData={setData} total={total} setTotal={setTotal} iterator={iterator} page={page} setPage={setPage} />
        else if (page === 4)
            return <Extras data={data} setData={setData} total={total} setTotal={setTotal} iterator={iterator} page={page} setPage={setPage} />
        else if (page === 5) {
            navigate('/checkout');
            // return <Checkout iterator={iterator} setIterator={setIterator} setData={setData} />
        }
    }



    return (
        <div>
            <h1>{question[page]}</h1>
            <br />
            <Stack sx={{ pb: "5rem" }} spacing={5} direction="column">
                {pageDisplay(page)}
            </Stack>

            <Stack justifyContent="center" spacing={2} direction="row">
                <BootstrapButton variant="contained" style={{ display: page === 0 ? "none" : "" }} onClick={previous}>Back</BootstrapButton>
                <BootstrapButton variant="contained" style={{ display: page != 4 ? "none" : "" }} onClick={next}>Next</BootstrapButton>
            </Stack>
        </div>
    )
};

export default Wizard;