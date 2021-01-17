import React from 'react';
import { FaBars } from 'react-icons/fa';
import Modal from './Modal';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Home = () => {
  const [showSidebar, setShowSidebar] = React.useState(true);

  return (
    <SHomeContainer>
      {showSidebar && <Sidebar hideSidebar={() => setShowSidebar(false)} />}

      <SIconContainer>
        {!showSidebar && <FaBars onClick={() => setShowSidebar(true)} />}
      </SIconContainer>
      <Modal />
    </SHomeContainer>
  );
};

export default Home;

const SHomeContainer = styled.div`
  position: relative;
`;

const SIconContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 20px;
`;
