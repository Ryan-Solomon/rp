import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import { Slider } from './Slider';
function App() {
  console.log(data);

  return (
    <>
      {data.map((info) => {
        return <Slider key={info.id} info={info} />;
      })}
    </>
  );
}

export default App;
