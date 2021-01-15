import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import styled from 'styled-components';
import data from './data';
import { Slider } from './Slider';
function App() {
  const [currentPersonId, setCurrentPersonId] = React.useState(1);
  console.log(data);

  const handleIdChange = (direction) => {
    if (direction === 'RIGHT') {
      if (currentPersonId === data.length - 1) {
        setCurrentPersonId(1);
      } else {
        setCurrentPersonId((i) => i + 1);
      }
    } else {
      if (currentPersonId === 1) {
        setCurrentPersonId(data.length - 1);
      } else {
        setCurrentPersonId((i) => i - 1);
      }
    }
  };

  return (
    <SContainer>
      {data.map((info) => {
        return (
          <Slider currentPersonId={currentPersonId} key={info.id} info={info} />
        );
      })}
      <SIconContainer>
        <SButton onClick={() => handleIdChange('LEFT')}>
          <FiChevronLeft size={30} />
        </SButton>
        <SButton onClick={() => handleIdChange('RIGHT')}>
          <FiChevronRight size={30} />
        </SButton>
      </SIconContainer>
    </SContainer>
  );
}

export default App;

const SContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SIconContainer = styled.div``;

const SButton = styled.button`
  background: none;
  outline: none;
  border: none;
`;
