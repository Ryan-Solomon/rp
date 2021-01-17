import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

function App() {
  return (
    <AppBackground>
      <Navbar />
    </AppBackground>
  );
}

export default App;

const AppBackground = styled.div`
  background: #222;
  height: 100vh;
  width: 100vw;
`;
