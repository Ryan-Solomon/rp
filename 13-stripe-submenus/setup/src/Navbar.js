import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <NavContainer>
      <LogoImage src={logo} alt='logo' />
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const LinksContainer = styled.ul``;

const ListItem = styled.li``;
