import React from 'react';
import styled from 'styled-components';
import { NavDropDown } from './NavDropDown';

export const NavItem = ({ item }) => {
  const { page, links } = item;

  return (
    <NavItemContainer>
      <NavPage>{page}</NavPage>
      <NavDropDown links={links} />
    </NavItemContainer>
  );
};

const NavPage = styled.h2`
  color: #fff;
  font-size: 16px;
  text-shadow: 1px 1px 10px #000000;
  margin: 0px 10px;
`;

const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
