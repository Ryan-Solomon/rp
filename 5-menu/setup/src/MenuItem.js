import React from 'react';

export const MenuItem = ({ item }) => {
  const { title, category, price, img, desc } = item;
  return <h1>{title}</h1>;
};
