import React from 'react';
import styled from 'styled-components';

const List = ({ data }) => {
  return (
    <SContainer>
      <SImage src={data.image} />
      <STextContainer>
        <h2>{data.name}</h2>
        <h3>{data.age}</h3>
      </STextContainer>
    </SContainer>
  );
};

export default List;

const SContainer = styled.div`
  display: flex;
`;

const STextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const SImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
`;
