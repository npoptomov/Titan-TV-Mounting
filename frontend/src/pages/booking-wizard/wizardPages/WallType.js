import React from 'react';
import { BootstrapButton } from '../../../consts';

function WallType({ data, setData, total, setTotal, iterator, page, setPage }) {
  return (
    <React.Fragment>

      <BootstrapButton onClick={() => {
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], wall_type: "Drywall or wood", wall_price: 0 }
        setData(newData);
        setPage(page => page + 1);
      }}>Drywall or wood</BootstrapButton>

      <BootstrapButton onClick={() => {
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], wall_type: "Brick", wall_price: 35 }
        setData(newData);
        setTotal(total => total + 35);
        setPage(page => page + 1);
      }}>Brick</BootstrapButton>

      <BootstrapButton onClick={() => {
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], wall_type: "Concrete", wall_price: 35 }
        setData(newData);
        setTotal(total => total + 35);
        setPage(page => page + 1);
      }}>Concrete</BootstrapButton>

      <BootstrapButton onClick={() => {
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], wall_type: "Other", wall_price: 35 }
        setData(newData);
        setTotal(total => total + 35);
        setPage(page => page + 1);
      }}>Other</BootstrapButton>


    </React.Fragment>
  )
};

export default WallType;