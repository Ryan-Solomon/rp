import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    if (numberOfParagraphs === 0) return;
    const getIpsum = async () => {
      const res = await fetch(
        `https://baconipsum.com/api/?type=meat-and-filler&paras=${numberOfParagraphs}&format=text`
      );
      const data = await res.json();
      setParagraphs(data);
    };
    getIpsum();
  }, [numberOfParagraphs]);

  return (
    <SContainer>
      <h1>Tired of boring ipsum?</h1>
    </SContainer>
  );
}

export default App;

const SContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 80vw;
  margin: 2rem auto;
  align-items: center;
  text-align: center;
`;
