import React from 'react';
import styled from 'styled-components';

export const Link = ({ link, color }) => {
  const { label, icon, url } = link;
  return (
    <LinkContainer color={color} href={url}>
      {icon}
      <LabelText color={color}>{label}</LabelText>
    </LinkContainer>
  );
};

const LinkContainer = styled.a`
  display: flex;
  padding: 10px;
  text-decoration: none;
  color: ${({ color }) => color || 'white'};
`;

const LabelText = styled.h3`
  color: ${({ color }) => color || 'white'};
  font-size: 16px;
  margin-left: 10px;
`;
