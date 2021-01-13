import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import styled from 'styled-components';
function App() {
  return (
    <AccordianContainer>
      <h1 style={{ color: 'black', fontSize: '20px', padding: '10px' }}>
        Questions And Answers
      </h1>
      {data.map((question) => {
        return <SingleQuestion key={question.id} question={question} />;
      })}
    </AccordianContainer>
  );
}

export default App;

const AccordianContainer = styled.main`
  background: #fff;
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: auto;
  margin-top: 6rem;
`;
