import React from 'react';
import { MenuItem } from './MenuItem';

const Menu = ({ items }) => {
  return (
    items.length > 0 &&
    items.map((item) => {
      return <MenuItem key={item.id} item={item} />;
    })
  );
};

export default Menu;
