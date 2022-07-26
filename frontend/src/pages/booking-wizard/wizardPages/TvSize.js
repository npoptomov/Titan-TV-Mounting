import React from 'react';
import BootstrapButton from '../../../consts';

function TvSize({ data, setData, total, setTotal, iterator, page, setPage }) {


  return (
    <React.Fragment>
        <BootstrapButton onClick={() => {
          const newData = [...data];
          newData[iterator] = { ...newData[iterator], tv_size: "Up to 31 inch", mount_price: 69 }
          setData(newData);
          setTotal(total => total + 69);
          setPage(page => page + 1);
        }}>Up to 31 inch</BootstrapButton>

        <BootstrapButton onClick={() => {
          const newData = [...data];
          newData[iterator] = { ...newData[iterator], tv_size: "32 to 60 inches", mount_price: 99 }
          setData(newData);
          setTotal(total => total + 99);
          setPage(page => page + 1);
        }}>32 to 60 inches</BootstrapButton>

        <BootstrapButton onClick={() => {
          const newData = [...data];
          newData[iterator] = { ...newData[iterator], tv_size: "61 to 80 inches", mount_price: 119 }
          setData(newData);
          setTotal(total => total + 119);
          setPage(page => page + 1);
        }}>61 to 80 inches</BootstrapButton>

        <BootstrapButton onClick={() => {
          const newData = [...data];
          newData[iterator] = { ...newData[iterator], tv_size: "More than 80 inches", mount_price: 139 }
          setData(newData);
          setTotal(total => total + 139);
          setPage(page => page + 1);
        }}>More than 80 inches</BootstrapButton>
    </React.Fragment>
  )
};

export default TvSize;