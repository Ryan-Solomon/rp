import React from 'react';
import styled from 'styled-components';

export const MenuItem = ({ item }) => {
  const { title, category, price, img, desc } = item;
  return (
    <SContainer>
      <SImage src={img} />
      <SContentContainer>
        <STitleAndPriceContainer>
          <STitle>{title}</STitle>
          <SPrice>{price}</SPrice>
        </STitleAndPriceContainer>
        <SInfo>{desc}</SInfo>
      </SContentContainer>
    </SContainer>
  );
};

const SContainer = styled.section`
  display: flex;
  margin: 2rem;
`;

const SImage = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

const SContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const STitleAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 1rem;
`;

const STitle = styled.h2`
  font-size: 1rem;
`;

const SPrice = styled.h2`
  font-size: 1rem;
`;

const SInfo = styled.p`
  font-size: 1rem;
`;
