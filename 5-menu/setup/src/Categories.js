import React from 'react';
import styled from 'styled-components';

const Categories = ({ items, updateMenuItems }) => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    const categories = items.map((item) => item.category);
    const uniqueCategories = Array.from(new Set([...categories, 'all'].sort()));
    setCategories(uniqueCategories);
  }, [items]);

  return (
    <SCategoriesContainer>
      {categories.length > 0 &&
        categories.map((category) => {
          return (
            <SButton key={category} onClick={() => updateMenuItems(category)}>
              <SCategory>{category}</SCategory>
            </SButton>
          );
        })}
    </SCategoriesContainer>
  );
};

export default Categories;

const SCategoriesContainer = styled.ul`
  display: flex;
`;

const SButton = styled.button`
  background: none;
  border: none;
  outline: none;
`;

const SCategory = styled.li`
  font-size: 20px;
  margin: 0 10px;
  color: teal;
`;
