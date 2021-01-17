import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <SNavContainer>
      <SHeader>Coding Addict</SHeader>
      <SListContainer>
        {links.map(({ text }) => {
          return <SListItem>{text}</SListItem>;
        })}
      </SListContainer>
      <SListContainer>
        {social.map(({ icon }) => {
          return <SListItem>{icon}</SListItem>;
        })}
      </SListContainer>
    </SNavContainer>
  );
};

export default Navbar;

const SNavContainer = styled.nav`
  display: flex;
  align-items: center;
`;

const SHeader = styled.h1`
  font-size: 2rem;
`;

const SListContainer = styled.ul`
  display: flex;
`;

const SListItem = styled.li``;
