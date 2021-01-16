import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
const List = ({ item, removeItem }) => {
  return (
    <SItemContainer>
      <h2>{item.text}</h2>
      <SBtnContainer>
        <FaEdit />
        <FaTrash onClick={() => removeItem(item.id)} />
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
