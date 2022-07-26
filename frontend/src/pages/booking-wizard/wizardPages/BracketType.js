import React from 'react';
import BootstrapButton from '../../../consts';

function BracketType({ data, setData, total, setTotal, iterator, page, setPage }) {
  return (
    <React.Fragment>

      <BootstrapButton onClick={() => {
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], bracket_type: "Fixed", bracket_price:50}
        setData(newData);
        setTotal(total => total + 50);
        setPage( page => page + 1 );
      }}>Fixed</BootstrapButton>

      <BootstrapButton onClick={() => {
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], bracket_type: "Full motion", bracket_price:70}
        setData(newData);
        setTotal(total => total + 70);
        setPage( page => page + 1 );
      }}>Full Motion</BootstrapButton>

      <BootstrapButton onClick={() => {
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], bracket_type: "None", bracket_price:0 } 
        setData(newData);
        setPage( page => page + 1 );
      }}>None</BootstrapButton>

    </React.Fragment>
  )
};

export default BracketType;