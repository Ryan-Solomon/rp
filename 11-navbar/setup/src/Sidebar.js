import React from 'react';
import { links } from './data';
import styled from 'styled-components';

export const Sidebar = () => {
  return (
    <SListContainer>
      {links.map(({ text }) => {
        return <SListItem>{text}</SListItem>;
      })}
    </SListContainer>
  );
};

const SListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
`;

const SListItem = styled.li`
  margin: 0px 0.5rem;
`;
