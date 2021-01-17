import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

export const ModalContent = ({ hideModal }) => {
  return (
    <SModalContentContainer>
      <ModalContainer>
        <SIconContainer>
          <FaTimes onClick={hideModal} />
        </SIconContainer>
        <h3>Modal Content</h3>
      </ModalContainer>
    </SModalContentContainer>
  );
};

const SModalContentContainer = styled.div`
  display: grid;
  place-items: center;
  background: rgba(100, 100, 100, 2);
  height: 100vh;
  width: 100vw;
`;

const ModalContainer = styled.div`
  position: relative;
  height: 30vh;
  width: 60vw;
  background: #fff;
  color: #333;
  display: grid;
  place-items: center;
`;

const SIconContainer = styled.div`
  position: absolute;
  top: 15px;
  right: 30px;
`;
