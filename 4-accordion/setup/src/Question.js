import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

const q = {
  id: 1,
  title: 'Do I have to allow the use of cookies?',
  info:
    'Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.',
};

const Question = () => {
  const [show, setShow] = React.useState(false);
  const { id, title, info } = q;

  return (
    <SQuestionContainer>
      <TitleAndButton>
        <h4>{title}</h4>
        <SButton onClick={() => setShow(!show)}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </SButton>
      </TitleAndButton>
      {show && (
        <InfoContainer>
          <p>{info}</p>
        </InfoContainer>
      )}
    </SQuestionContainer>
  );
};

export default Question;

const SQuestionContainer = styled.section``;

const TitleAndButton = styled.section`
  display: flex;
  box-shadow: 2px 2px 10px grey;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 15px;
`;

const InfoContainer = styled.section`
  background-color: #fff;
  padding: 15px;
`;

const SButton = styled.button`
  background: grey;
  border-radius: 50%;
  border: none;
  display: grid;
  place-items: center;
  padding: 5px;
  margin-right: 15px;
`;
