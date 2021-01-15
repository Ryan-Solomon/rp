import React from 'react';
import styled from 'styled-components';

export const Duty = ({ duty }) => {
  return (
    <SContainer>
      <SContent>{duty}</SContent>
    </SContainer>
  );
};

const SContainer = styled.div``;

const SContent = styled.p``;
