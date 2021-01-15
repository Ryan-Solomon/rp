import React from 'react';
import styled from 'styled-components';

export const Slider = ({ info, currentPersonId }) => {
  const { image, name, quote, title, id } = info;
  return (
    <SContainer style={{ display: currentPersonId === id ? 'flex' : 'none' }}>
      <SImage src={image} />
      <SName>{name}</SName>
      <SRole>{title}</SRole>
      <SInfo>{quote}</SInfo>
    </SContainer>
  );
};

const SContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70vw;
  margin: auto;
`;

const SImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const SName = styled.h2`
  color: teal;
`;

const SRole = styled.h3``;

const SInfo = styled.p``;
