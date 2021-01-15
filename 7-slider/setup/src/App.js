import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import styled from 'styled-components';
import data from './data';
import { Slider } from './Slider';
function App() {
  const [currentPersonId, setCurrentPersonId] = React.useState(1);
  console.log(data);

  return (
    <SContainer>
      {data.map((info) => {
        return (
          <Slider currentPersonId={currentPersonId} key={info.id} info={info} />
        );
      })}
      <SIconContainer>
        <SButton>
          <FiChevronLeft />
        </SButton>
        <SButton>
          <FiChevronRight />
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
