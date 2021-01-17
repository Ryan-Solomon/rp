import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';
import styled from 'styled-components';
import { Sidebar } from './Sidebar';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const setWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', setWidth);

    return () => window.removeEventListener('resize', setWidth);
  }, []);

  return (
    <SNavContainer>
      <SHeaderAndNav>
        <SHeader>Coding Addict</SHeader>

        {windowWidth > 800 ? (
          <>
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
          </>
        ) : (
          <FaBars onClick={() => setShowSidebar(!showSidebar)} size={30} />
        )}
      </SHeaderAndNav>

      {showSidebar && <Sidebar />}
    </SNavContainer>
  );
};

export default Navbar;

const SNavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  padding-top: 1rem;
`;

const SHeaderAndNav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SHeader = styled.h1`
  font-size: 1.4rem;
`;

const SListContainer = styled.ul`
  display: flex;
  align-items: center;
`;

const SListItem = styled.li`
  margin: 0px 0.5rem;
`;
