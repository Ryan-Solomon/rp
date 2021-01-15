import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { UserInfo } from './UserInfo';
import styled from 'styled-components';
import { Nav } from './Nav';
const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [status, setStatus] = React.useState('idle');
  const [info, setInfo] = React.useState([]);
  const [infoIndex, setInfoIndex] = React.useState(0);

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
  console.log(info);

  return (
    <SContainer>
      <h1>Experience</h1>
      <Nav setInfoIndex={setInfoIndex} info={info} />
      <UserInfo info={info[infoIndex]} />
    </SContainer>
  );
}

export default App;

const SContainer = styled.main`
  padding: 2rem;
`;
