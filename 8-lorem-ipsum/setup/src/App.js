import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {
  const [numberOfParagraphs, setNumberOfParagraphs] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);
  const [shouldGenerate, setShouldGenerate] = useState(false);

  useEffect(() => {
    if (numberOfParagraphs === 0) return;
    if (!shouldGenerate) return;
    const getIpsum = async () => {
      try {
        const res = await fetch(
          `https://baconipsum.com/api/?type=meat-and-filler&paras=${numberOfParagraphs}&format=text`
        );

        const data = await res.json();
        setParagraphs(data);
        setShouldGenerate(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    getIpsum();
  }, [numberOfParagraphs, shouldGenerate]);

  console.log(paragraphs);

  return (
    <SContainer>
      <h1>Tired of boring ipsum?</h1>
      <label htmlFor='count'>Paragraphs: </label>
      <input
        type='number'
        id='count'
        value={numberOfParagraphs}
        onChange={(e) => setNumberOfParagraphs(e.target.value)}
      />
      <button onClick={() => setShouldGenerate(true)}>Generate</button>
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
