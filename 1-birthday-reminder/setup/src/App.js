import React, { useState } from 'react';
import myData from './data';
import List from './List';
import styled from 'styled-components';

function App() {
  const [data, setData] = React.useState(myData);
  return (
    <AppContainer>
      {data?.map((person) => {
        return <List key={person.id} data={person} />;
      })}
      <button onClick={() => setData([])}>CLEAR</button>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background: #222;
`;
