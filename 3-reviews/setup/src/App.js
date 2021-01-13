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

  const setIdx = () => {
    if (currentPersonIdx === peopleData.length - 1) {
      setCurrentPersonIdx(0);
    } else {
      setCurrentPersonIdx((i) => i + 1);
    }
  };

  return (
    <>
      <h1>Our Reviews</h1>
    </>
  );
}

export default App;
