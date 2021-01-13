import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  return (
    <>
      <h1>Our Menu</h1>
      <Categories items={items} />
      <Menu items={items} />
    </>
  );
}

export default App;
