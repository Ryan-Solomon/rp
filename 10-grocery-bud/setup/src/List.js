import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
const List = ({ item }) => {
  return (
    <SItemContainer>
      <h2>{item.text}</h2>
      <SBtnContainer>
        <FaEdit />
        <FaTrash />
      </SBtnContainer>
    </SItemContainer>
  );
};

export default List;

const SItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: #555;
`;

const SBtnContainer = styled.div`
  display: flex;
`;
