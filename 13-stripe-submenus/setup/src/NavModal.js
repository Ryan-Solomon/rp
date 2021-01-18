import React from 'react';
import styled from 'styled-components';

export const NavModal = () => {
  return (
    <ModalContainer>
      <ModalX>X</ModalX>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  background: #fff;
  position: fixed;
  top: 20px;
  left: 20px;
  height: 90vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
`;

const ModalX = styled.button`
  background: none;
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: bold;
  align-self: flex-end;
  margin-right: 30px;
  margin-top: 20px;
`;
