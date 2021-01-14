import React from 'react';
import styled from 'styled-components';

export const MenuItem = ({ item }) => {
  const { title, category, price, img, desc } = item;
  return <h1>{title}</h1>;
};

const SContainer = styled.section`
  display: flex;
`;

const SImage = styled.img`
  width: 10rem;
  height: 10rem;
  object-fit: cover;
`;

const SContentContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const STitleAndPriceContainer = styled.div`
  display: flex;
  flex-direction: space-between;
`;

const STitle = styled.h2``;

const SPrice = styled.h2``;

const SInfo = styled.p``;
