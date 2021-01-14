import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [status, setStatus] = React.useState('idle');
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      setStatus('pending');
      try {
        const res = await fetch(url);
        const data = await res.json();
        setInfo(data);
        setStatus('fulfilled');
      } catch (e) {
        console.error(e.message);
      }
    };
    getData();
  }, []);

  console.log(info);

  return <h2>tabs project setup</h2>;
}

export default App;
