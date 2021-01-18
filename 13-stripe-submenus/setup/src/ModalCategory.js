import React from 'react';
import { Link } from './Link';
import styled from 'styled-components';

export const ModalCategory = ({ data }) => {
  const { page, links } = data;
  return (
    <>
      <CategoryTitle>{page}</CategoryTitle>
      <DataContainer>
        {links.map((link) => {
          return <Link color='black' key={link.label} link={link} />;
        })}
      </DataContainer>
    </>
  );
};

const CategoryTitle = styled.h3`
  color: #333;
`;

const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: black;
`;
