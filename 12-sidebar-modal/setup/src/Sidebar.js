import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

const Sidebar = ({ hideSidebar }) => {
  return (
    <SNavContainer>
      <SHeader>
        <h3>Coding Addict</h3>
        <FaTimes onClick={hideSidebar} />
      </SHeader>
      <SNavListContainer>
        {links.map((link) => {
          return (
            <SItemContainer key={link.id}>
              {link.icon}
              <SNavListItem>{link.text}</SNavListItem>
            </SItemContainer>
          );
        })}
      </SNavListContainer>
    </SNavContainer>
  );
};

export default Sidebar;

const SHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 12px;
`;

const SNavContainer = styled.nav`
  background: #222;
  position: absolute;
  width: 17rem;
  height: 100vh;
`;

const SNavListContainer = styled.ul`
  list-style: none;
`;

const SItemContainer = styled.div`
  display: flex;
`;

const SNavListItem = styled.li`
  margin-left: 10px;
`;
