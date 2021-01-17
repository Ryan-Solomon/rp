import React from 'react';
import styled from 'styled-components';

export const Link = ({ link }) => {
  const { label, icon, url } = link;
  return (
    <LinkContainer href={url}>
      {icon}
      <LabelText>{label}</LabelText>
    </LinkContainer>
  );
};

const LinkContainer = styled.a`
  display: flex;
  padding: 10px;
  text-decoration: none;
  color: white;
`;

const LabelText = styled.h3`
  color: white;
  font-size: 16px;
  margin-left: 10px;
`;
