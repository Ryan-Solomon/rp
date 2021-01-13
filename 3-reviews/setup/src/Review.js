import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import styled from 'styled-components';

const whoever = {
  id: 4,
  name: 'bill anderson',
  job: 'the boss',
  image:
    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  text:
    'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
};

const Review = () => {
  const { image, name, job, text } = whoever;
  return (
    <SContainer>
      <SImage src={image} />
      <h2>{name}</h2>
      <h4>{job}</h4>
      <p>{text}</p>
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
