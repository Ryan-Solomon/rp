import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import List from './List';
import Alert from './Alert';

function App() {
  const [list, setList] = useState([]);

  return (
    <SAppContainer>
      <SGroceryContainer>
        <h1>Grocery Bud</h1>
        <label htmlFor='add-item'>Add Item</label>
        <input type='text' name='add-item' id='add-item' />
      </SGroceryContainer>
    </SAppContainer>
  );
}

export default App;

const SAppContainer = styled.div`
  display: grid;
  place-items: center;
  background: #333;
  height: 100vh;
`;

const SGroceryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12rem;
  color: white;
  background: #222;
  padding: 2rem;
`;
