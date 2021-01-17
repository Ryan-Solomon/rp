import React from 'react';
import { FaTimes } from 'react-icons/fa';

export const ModalContent = () => {
  return (
    <SModalContentContainer>
      <SIconContainer>
        <FaTimes />
      </SIconContainer>
      <h3>Modal Content</h3>
    </SModalContentContainer>
  );
};

const SModalContentContainer = styled.div`
  position: relative;
  display: grid;
  place-items: center;
`;

const SIconContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
