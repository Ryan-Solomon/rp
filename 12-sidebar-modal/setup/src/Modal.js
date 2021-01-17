import React from 'react';
import styled from 'styled-components';
import { ModalContent } from './ModalContent';

const Modal = () => {
  const [showContent, setShowContent] = React.useState(false);

  if (showContent) {
    return <ModalContent hideModal={() => setShowContent(false)} />;
  }

  return (
    <SModalContainer>
      <SModalButton onClick={() => setShowContent(true)}>
        <SModalText>Show Modal</SModalText>
      </SModalButton>
    </SModalContainer>
  );
};

export default Modal;

const SModalContainer = styled.div`
  height: 90vh;
  width: 90vw;
  margin: auto;
  display: grid;
  place-items: center;
`;

const SModalButton = styled.button`
  background: #333;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #a3a3a3;
  display: grid;
  place-items: center;
  padding: 0 12px;
  color: white;
  transition: all 0.2s ease;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    transform: scale(0.96);
    background: white;
    color: #333;
  }
`;

const SModalText = styled.h3`
  font-size: 1rem;
`;
