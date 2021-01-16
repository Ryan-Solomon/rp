import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import List from './List';
import Alert from './Alert';

function App() {
  const [list, setList] = useState([]);
  const [currentItem, setCurrentItem] = useState('');

  const addItem = () => {
    const newItems = [...list, { text: currentItem, id: new Date().getTime() }];
    setList(newItems);
    setCurrentItem('');
  };

  return (
    <SAppContainer>
      <SGroceryContainer>
        <h1>Grocery Bud</h1>
        <label htmlFor='add-item'>Add Item</label>
        <input
          value={currentItem}
          onChange={(e) => setCurrentItem(e.target.value)}
          type='text'
          name='add-item'
          id='add-item'
        />
        <button onClick={addItem}>Add</button>
        {list.length > 0 &&
          list.map((item) => {
            return <h1 key={item.id}>{item.text}</h1>;
          })}
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
