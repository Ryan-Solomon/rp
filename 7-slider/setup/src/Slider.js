import React from 'react';
import styled from 'styled-components';

export const Slider = () => {
  return (
    <SContainer>
      <SImage />
      <SName></SName>
      <SRole></SRole>
      <SInfo></SInfo>
    </SContainer>
  );
};

const SContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const SImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;
