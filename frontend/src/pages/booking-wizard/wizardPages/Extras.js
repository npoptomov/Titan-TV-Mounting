import React, { useState } from 'react';
import BootstrapButton from '../../../consts';

function Extras({ data, setData, total, setTotal, iterator, page, setPage }) {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [selected3, setSelected3] = useState(false);

  return (
    <React.Fragment>
      <BootstrapButton sx={{ backgroundColor: selected1 ? '#7D1DFF' : '#FFFFFF', color: selected1 ? '#FFFFFF' : '#7D1DFF' }} onClick={() => {
        setSelected1(() => !selected1);
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], cord_hide: data[iterator].cord_hide === 0 ? 1 : 0 }
        setData(newData);

        if (selected1)
          setTotal(() => total - 29);
        else
          setTotal(() => total + 29);

      }}>Hide the external cord</BootstrapButton>

      <BootstrapButton sx={{ backgroundColor: selected2 ? '#7D1DFF' : '#FFFFFF', color: selected2 ? '#FFFFFF' : '#7D1DFF' }} onClick={() => {
        setSelected2(() => !selected2);
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], soundbar: data[iterator].soundbar === 0 ? 1 : 0 }
        setData(newData);
        if (selected2)
          setTotal(() => total - 49);
        else
          setTotal(() => total + 49);
      }}>Sound-bar installation</BootstrapButton>

      <BootstrapButton sx={{ backgroundColor: selected3 ? '#7D1DFF' : '#FFFFFF', color: selected3 ? '#FFFFFF' : '#7D1DFF' }} onClick={() => {
        setSelected3(() => !selected3);
        const newData = [...data];
        newData[iterator] = { ...newData[iterator], shelf: data[iterator].shelf === 0 ? 1 : 0 }
        setData(newData);
        if (selected3)
          setTotal(() => total - 49);
        else
          setTotal(() => total + 49);
      }}>Install with shelf</BootstrapButton>
    </React.Fragment>
  )
};

export default Extras;