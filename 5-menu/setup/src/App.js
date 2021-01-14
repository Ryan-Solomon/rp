import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = React.useState(items);

  const updateMenuItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <>
      <h1>Our Menu</h1>
      <Categories updateMenuItems={updateMenuItems} items={items} />
      <Menu items={menuItems} />
    </>
  );
}

export default App;
