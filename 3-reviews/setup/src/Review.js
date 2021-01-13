import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styled from 'styled-components';

const Review = ({ person, setIdx }) => {
  const { image, name, job, text } = person;
  return (
    <SContainer>
      <SImage src={image} />
      <h2>{name}</h2>
      <h4>{job}</h4>
      <p>{text}</p>
      <SButtonContainer>
        <SButton onClick={() => setIdx('BACKWARD')}>
          <FaChevronLeft size={30} />
        </SButton>
        <SButton onClick={() => setIdx('FORWARD')}>
          <FaChevronRight size={30} />
        </SButton>
      </SButtonContainer>
      <SButton>Surprise Me</SButton>
    </SContainer>
  );
};

export default Review;

const SContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: 70vw;
  padding: 20px;
`;

const SImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

const SButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 4rem;
  margin-bottom: 20px;
`;

const SButton = styled.button`
  background: none;
  outline: none;
  border: none;
`;
