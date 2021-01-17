import React from 'react';
import styled from 'styled-components';

export const NavItem = ({ item }) => {
  const { page, links } = item;
  return <NavPage>{page}</NavPage>;
};

const NavPage = styled.h2`
  color: #fff;
  font-size: 16px;
  text-shadow: 1px 1px 10px #000000;
  margin: 0px 10px;
`;
