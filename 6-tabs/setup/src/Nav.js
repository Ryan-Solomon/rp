import React from 'react';
import styled from 'styled-components';

export const Nav = ({ info, setInfoIndex }) => {
  return (
    <>
      {info?.map((info, idx) => (
        <SButton onClick={() => setInfoIndex(idx)} key={info.id}>
          <li style={{ listStyle: 'none', padding: '10px' }}>{info.company}</li>
        </SButton>
      ))}
    </>
  );
};

const SButton = styled.button`
  background: none;
  outline: none;
  border: none;
  transition: all 0.2s ease;

  &:hover {
    background: grey;
    cursor: pointer;
  }
`;
