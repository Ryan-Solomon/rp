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

const DropDownContainer = styled.div`
  position: absolute;
  top: 40px;
  display: flex;
  flex-direction: column;
`;
