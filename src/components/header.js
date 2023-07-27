import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Container from "./container";
import ThemeSwitchButton from "./theme-switch";
import { useStaticQuery, graphql } from "gatsby";
import { useTheme } from '../ThemeContext/ThemeContext';

const HEADER_NAV_ITEM = [
  {
    label: "Guides",
    url: "/guides",
    isExternal: false,
  },
  {
    label: "Simulacra",
    url: "/simulacra",
    isExternal: false,
  },
  /*{
    label: "Contact",
    url: "/contact",
    isExternal: false,
  },*/
  {
    label: "About",
    url: "/about",
    isExternal: false,
  },
];

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const { darkMode, setDarkMode } = useTheme(); // Get the dark mode state and setter from the ThemeContext
  const [updatedDarkMode, setUpdatedDarkMode] = useState(darkMode); // Separate state variable for updated dark mode preference

  const handleThemeToggle = () => {
    setUpdatedDarkMode((prevDarkMode) => !prevDarkMode); // Update the separate state variable for the new dark mode preference

    // Store the new dark mode preference in local storage
    localStorage.setItem("darkMode", (!darkMode).toString());
  };

  useEffect(() => {
    // Apply the updated dark mode preference when the page is refreshed or re-rendered
    setDarkMode(updatedDarkMode);
  }, [updatedDarkMode, setDarkMode]);

  return (
    <StyledHeader darkMode={darkMode}>
      <HeaderWrapper>
        <HeaderLogo>
          <Link to="/">
            <img src="/media/logo.png" alt="Logo" />
          </Link>
        </HeaderLogo>

        <HeaderNavList>
          {HEADER_NAV_ITEM.map((item, index) => {
            if (item.isExternal) {
              return (
                <HeaderNavListItem key={index}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </HeaderNavListItem>
              );
            }

            return (
              <HeaderNavListItem key={index}>
                <Link to={item.url}>{item.label}</Link>
              </HeaderNavListItem>
            );
          })}
          <HeaderNavListItem>
            <ThemeSwitchButton onClick={handleThemeToggle} />
          </HeaderNavListItem>
        </HeaderNavList>
      </HeaderWrapper>
    </StyledHeader>
  );
};

export default Header;

// StyledHeader and other styled components
const StyledHeader = styled.header`
  padding-top: var(--size-300);
  background-color: ${({ darkMode }) => (darkMode ? "#252526" : "#f5f5f5")}; // Set background color based on dark mode
  color: ${({ darkMode }) => (darkMode ? "#e9e9e9" : "#000000")}; // Set text color based on dark mode
`;

const HeaderNavList = ({ children }) => {
  return (
    <StyledNav>
      <StyledNavList>{children}</StyledNavList>
    </StyledNav>
  );
};

const HeaderNavListItem = ({ children }) => {
  return <StyledNavListItem>{children}</StyledNavListItem>;
};



const HeaderWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.div`
  & a {
    display: flex;
    align-items: center;
  }

  & img {
    width: 50px;
    height: 50px;
  }
`;

const StyledNav = styled.nav`
  position: static;
  padding: 0;
  background: transparent;
  backdrop-filter: unset;
`;

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0;
  list-style-type: none;
`;

const StyledNavListItem = styled.li`
  &:not(:last-of-type) {
    margin-right: 2rem;
  }
  @media screen and (max-width: 700px) {
    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
  & a {
    color: inherit;
    text-transform: uppercase;
    font-size: var(--size-300);
    text-decoration: none;
    letter-spacing: 0.1rem;
  }
  @media screen and (max-width: 700px) {
    & a {
      font-size: 0.7rem;
    }
  }
`;

