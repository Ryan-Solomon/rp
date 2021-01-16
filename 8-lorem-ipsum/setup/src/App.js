import React, { useState, useEffect } from 'react';

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

  return <h2>lorem ipsum project setup</h2>;
}

export default App;
