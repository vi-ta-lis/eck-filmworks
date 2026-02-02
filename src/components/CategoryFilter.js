import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <FilterContainer>
      {categories.map((category) => (
        <FilterButton
          key={category}
          onClick={() => onCategoryChange(category)}
          active={activeCategory === category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 3rem 0 5rem;
  padding: 0 2rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.8rem 2rem;
  background: ${(props) => (props.active ? "#23d997" : "transparent")};
  border: 2px solid #23d997;
  border-radius: 30px;
  color: ${(props) => (props.active ? "#1b1b1b" : "#23d997")};
  font-size: 1rem;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => (props.active ? "#1fc184" : "rgba(35, 217, 151, 0.1)")};
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

export default CategoryFilter;
