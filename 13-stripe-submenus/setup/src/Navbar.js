import React from 'react';
import { NavItem } from './NavItem';
import styled from 'styled-components';
import logo from './images/logo.svg';
import { useAppContext } from './context';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { links } = useAppContext();
  return (
    <NavContainer>
      <LogoImage src={logo} alt='logo' />
      <LinksContainer>
        {links.map((item) => {
          return <NavItem key={item.page} item={item} />;
        })}
      </LinksContainer>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
`;

const LogoImage = styled.img`
  object-fit: cover;
`;

const LinksContainer = styled.ul`
  display: flex;
`;

const ListItem = styled.li``;
