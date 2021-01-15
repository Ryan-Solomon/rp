import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { UserInfo } from './UserInfo';
import styled from 'styled-components';
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

  if (status !== 'fulfilled') return <h1>whatever</h1>;

  return (
    <SContainer>
      <h1>Experience</h1>
      <UserInfo info={info[0]} />
    </SContainer>
  );
}

export default App;

const SContainer = styled.main`
  padding: 2rem;
`;
