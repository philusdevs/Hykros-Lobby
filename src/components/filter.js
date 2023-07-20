import React from 'react';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 15px;
  position: sticky; 
  top: 0; 
  z-index: 999; 
`;

const FilterButton = styled.button`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-300);
  background-color: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255, 0.9)' : 'transparent')};
  color: ${({ isActive }) => (isActive ? '#212122' : 'inherit')};
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  padding: 0.2rem 0.6rem;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.9)')};
  }

  body.light-mode & {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.7);
    color: #212122;
  }

  body.light-mode &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  body.dark-mode & {
    background-color: #212122;
    border: 1px solid #1a1a1b;
    opacity: 0.8;
  }
`;

const Filter = ({ activeFilter, setActiveFilter }) => {
  const filterOptions = [
    'All',
    'Frost',
    'Flame',
    'Physical',
    'Volt',
    'Altered',
    'Physical&Flame',
  ];

  return (
    <FilterWrapper>
      {filterOptions.map((filter) => (
        <FilterButton
          key={filter}
          isActive={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
        >
          {filter}
        </FilterButton>
      ))}
    </FilterWrapper>
  );
};

export default Filter;
