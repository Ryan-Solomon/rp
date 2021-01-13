import React from 'react';
import people from './data';
import Review from './Review';
function App() {
  const [currentPersonIdx, setCurrentPersonIdx] = React.useState(0);
  const [peopleData, _setPeopleData] = React.useState(people);
  const [person, setPerson] = React.useState(people[0]);

  React.useEffect(() => {
    setPerson(peopleData[currentPersonIdx]);
  }, [currentPersonIdx]);

  const surpriseIdx = () => {
    const surprise = Math.floor(Math.random() * peopleData.length);
    setCurrentPersonIdx(surprise);
  };

  const setIdx = (direction) => {
    if (direction === 'FORWARD') {
      if (currentPersonIdx === peopleData.length - 1) {
        setCurrentPersonIdx(0);
      } else {
        setCurrentPersonIdx((i) => i + 1);
      }
    } else if (direction === 'BACKWARD') {
      if (currentPersonIdx === 0) {
        setCurrentPersonIdx(peopleData.length - 1);
      } else {
        setCurrentPersonIdx((i) => i - 1);
      }
    }
  };

  return (
    <>
      <h1>Our Reviews</h1>
      <Review person={person} surpriseIdx={surpriseIdx} setIdx={setIdx} />
    </>
  );
}

export default App;
