import React from 'react';
import styled from 'styled-components';
import { Duty } from './Duty';

export const UserInfo = ({ info }) => {
  const { company, dates, duties, title } = info;
  return (
    <SContainer>
      <SText fontSize='20px'>{title}</SText>
      <SText fontSize='16px'>{company}</SText>
      <SText fontSize='14px'>{dates}</SText>
      <SContent>
        {duties.length > 0 &&
          duties.map((duty, idx) => {
            return <Duty duty={duty} key={duty.substring(0, 5) + idx} />;
          })}
      </SContent>
    </SContainer>
  );
};

const SContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const SText = styled.h2`
  font-size: ${({ fontSize }) => fontSize || '16px'};
`;

const SContent = styled.div``;
