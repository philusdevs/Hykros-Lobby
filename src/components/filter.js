import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const FilterWrapper = styled.div`
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 15px;
  position: fixed; /* Change to fixed */
  top: 0;
  left: 0; /* Add left: 0 to ensure it starts from the left edge */
  right: 0; /* Add right: 0 to ensure it spans the full width */
  z-index: 999;
  background-color: white; /* Set a background color if needed */
`;

const FilterButton = styled.button`
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  text-transform: uppercase;
  font-size: var(--size-300);
  background-color: ${({ isActive }) =>
    isActive ? "rgba(255, 255, 255, 0.9)" : "transparent"};
  color: ${({ isActive }) => (isActive ? "#212122" : "inherit")};
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  padding: 0.2rem 0.6rem;

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.9)"};
  }

  body.light-mode & {
    ${lightModeStyles};
  }

  body.dark-mode & {
    ${darkModeStyles};
  }
`;

const lightModeStyles = css`
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.7);
  color: #212122;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;

const darkModeStyles = css`
  background-color: #212122;
  border: 1px solid #1a1a1b;
  opacity: 0.8;
`;

const Filter = ({ activeFilter, setActiveFilter }) => {
  const filterOptions = [
    "All",
    "Frost",
    "Flame",
    "Physical",
    "Volt",
    "Altered",
    "Physical&Flame",
  ];

  return (
    <FilterWrapper>
      {filterOptions.map((filterOption) => (
        <FilterButton
          key={filterOption}
          isActive={activeFilter === filterOption}
          onClick={() => setActiveFilter(filterOption)}
        >
          {filterOption}
        </FilterButton>
      ))}
    </FilterWrapper>
  );
};

Filter.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  setActiveFilter: PropTypes.func.isRequired,
};

export default Filter;
