import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import PostList from '../components/post-list';
import styled from 'styled-components';

const Guides = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout title="Guide">
      <HeaderWrapper>
        <iframe 
          src="https://docs.google.com/spreadsheets/d/1GIlIztVhdwrznchuwRj-pTQdXV6QG8feZ_p-ffenKXo/edit#gid=1576019148" 
          style={{width: "100%", height: "600px"}} 
          title="Google Sheet Calculator"
        />
      </HeaderWrapper>

      <PostList posts={posts} />
    </Layout>
  );
};

export default Guides;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--size-900);
  margin-bottom: var(--size-700);

  h1 {
    max-width: none;
  }
`;

export const homePageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
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
  }
`;
