import React, { useState } from 'react';
import styled from 'styled-components';

const Tour = ({ tour }) => {
  const [showMore, setShowMore] = React.useState(false);

  const { image, info, name, price } = tour;
  return (
    <STourContainer>
      <SImage src={image} />
      <SContent>
        <NameAndPrice>
          <h2>{name}</h2>
          <h4>{price}</h4>
        </NameAndPrice>
        <p style={{ color: 'black' }}>
          {showMore ? info : info.substring(0, 100)}...
        </p>
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Read Less' : 'Read More'}
        </button>
        <button>Not Interested</button>
      </SContent>
    </STourContainer>
  );
};

export default Tour;

const STourContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 60vh;
  background: white;
`;

const SContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: grey;
`;

const NameAndPrice = styled.div`
  display: flex;
`;

const SImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;
