import React from 'react';

export const NavItem = ({ item }) => {
  const { page, links } = item;
  return <h3>{item.page}</h3>;
};
