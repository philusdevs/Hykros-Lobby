import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import StyledLink from '../components/styled-link';
import styled from 'styled-components';

const HomePage = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // Add dark mode state
  

  const posts = data.allMarkdownRemark.nodes;
  const intro = data.markdownRemark.html;
  const title = data.markdownRemark.frontmatter.title;

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter((post) => {
    const { title, tags } = post.frontmatter;
    const lowerCaseQuery = searchQuery.toLowerCase();

    return (
      title.toLowerCase().includes(lowerCaseQuery) ||
      tags.join(' ').toLowerCase().includes(lowerCaseQuery)
    );
  });

  return (
    <Layout title={title}>
      <Intro
        dangerouslySetInnerHTML={{
          __html: intro,
        }}
      />

      <SearchContainer>
        <StyledTextField
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <IconButton disabled>
                <SearchIcon />
              </IconButton>
            ),
          }}
          darkMode={isDarkMode} // Pass the dark mode state as a prop
        />
      </SearchContainer>

      {searchQuery && <PostList posts={filteredPosts} />}
    </Layout>
  );
};

export default HomePage;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60ch;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: var(--size-800);
  margin-bottom: var(--size-900);
  text-align: center;

  & p {
    text-transform: capitalize;
    font-size: var(--size-400);
  }

  @media screen and (max-width: 700px) {
    & h1 {
      font-size: var(--size-700);
    }
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -40px; /* Adjust the top margin */
  margin-bottom: 0px; /* Adjust the bottom margin */
`;

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    height: 32px;
    background-color: ${({ darkMode }) => (darkMode ? "#252526" : "#f5f5f5")}; // Adjust background color based on dark mode
    color: ${({ darkMode }) => (darkMode ? "#e9e9e9" : "#37292C")}; // Adjust text color based on dark mode
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType:{ in: ["posts", "simulacra"] } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 9
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tags
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
