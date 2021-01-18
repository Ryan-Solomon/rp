import React from 'react';
import { Link } from './Link';
import styled from 'styled-components';

export const NavDropDown = ({ links }) => {
  return (
    <DropDownContainer>
      {links.map((link) => {
        return <Link key={link.label} link={link} />;
      })}
    </DropDownContainer>
  );
};

export const DropDownContainer = styled.div`
  position: absolute;
  top: 0px;
  padding-top: 30px;
  display: none;
  flex-direction: column;

  &:hover {
    display: flex;
  }
`;
