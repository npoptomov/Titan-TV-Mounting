import React from 'react';
import BootstrapButton from '../../../consts';

function Placement({ data, setData, iterator, page, setPage }) {
  return (
    <React.Fragment>
      <BootstrapButton onClick={() => {
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], placement: "On the wall" }
        setData(newData);
        setPage( page => page + 1 );
      }}>On the wall</BootstrapButton>

      <BootstrapButton onClick={() => {
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], placement: "Above a fireplace" }
        setData(newData);
        setPage( page => page + 1 );
      }}>Above a fireplace</BootstrapButton>
    </React.Fragment>
  )
};

export default Placement;