import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Container from "./container";

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
  {
    label: "Matrices",
    url: "/matrices",
    isExternal: false,
  },
];

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const localDarkMode = localStorage.getItem("darkMode");
    if (localDarkMode !== null) {
      setDarkMode(localDarkMode === "true");
      setIsInitialLoad(true);
    }
  }, []);

  useEffect(() => {
    if (!isInitialLoad) {
      localStorage.setItem("darkMode", darkMode.toString());
    }
  }, [darkMode, isInitialLoad]);

  return (
    <StyledHeader darkMode={darkMode} isInitialLoad={isInitialLoad}>
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
        </HeaderNavList>
      </HeaderWrapper>
    </StyledHeader>
  );
};

// StyledHeader and other styled components
const StyledHeader = styled.header`
  padding-top: var(--size-300);
  background-color: ${({ darkMode }) => (darkMode ? "#000000" : "#000000")};
  color: ${({ darkMode }) => (darkMode ? "#e9e9e9" : "#e9e9e9")};
  transition: ${({ isInitialLoad }) => (isInitialLoad ? "background-color -1s" : "background-color -1s")};
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

export default Header;
