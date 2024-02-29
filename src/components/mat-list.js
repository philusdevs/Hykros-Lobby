import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Tags from "./tags";

const MatriceList = ({ posts }) => {
  const matricePosts = posts.filter(
    (post) => post.fields.contentType === "matrices"
  );

  const MatriceListItems = matricePosts.map(
    ({ frontmatter, fields, excerpt, timeToRead }) => {
      const { title, tags, date } = frontmatter;
      const { slug } = fields;

      return (
        <MatriceListItem
          key={slug}
          tags={tags}
          title={title}
          date={date}
          slug={slug}
          timeToRead={timeToRead}
          excerpt={excerpt}
        />
      );
    }
  );

  return <StyledMatriceList>{MatriceListItems}</StyledMatriceList>;
};

export default MatriceList;

const MatriceListItem = ({ title, date, timeToRead, tags, excerpt, slug }) => {
  return (
    <StyledMatriceListItem>
      <Tags tags={tags} />

      <MatriceListTitle>
        <Link to={slug}>{title}</Link>
      </MatriceListTitle>
      <MatriceListExcerpt
        dangerouslySetInnerHTML={{
          __html: excerpt,
        }}
      />
      <MatriceListMeta>
        <span>{date}</span>

        <span>{timeToRead} mins</span>
      </MatriceListMeta>
    </StyledMatriceListItem>
  );
};

const StyledMatriceList = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  justify-items: center;
  grid-gap: var(--size-600);
  grid-template-columns: repeat(auto-fit, minmax(35ch, 1fr));

  @media screen and (max-width: 500px) {
    & {
      display: block;
    }
  }
`;

const StyledMatriceListItem = styled.li`
  display: flex;
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
  flex-direction: column;
  transition: all 0.3s ease-out;

  /* Styling for light and dark modes (modify as needed) */
  body.light-mode & {
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background-color: rgba(255, 255, 255, 0.3);
  }

  body.light-mode &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  body.dark-mode & {
    background-color: #3b3b3c;
    border: 1px solid #515151;
  }

  @media screen and (max-width: 500px) {
    & {
      margin-top: var(--size-600);
    }
  }
`;

const MatriceListTitle = styled.h2`
  line-height: 1.2;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: capitalize;
  font-size: var(--size-600);
  font-weight: 700;

  & a {
    text-decoration: none;
    color: inherit;
  }

  & a::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const MatriceListExcerpt = styled.p`
  margin-top: auto;
  font-size: var(--size-400);
`;

const MatriceListMeta = styled.div`
  margin-top: 2rem;
  font-size: var(--size-300);
  display: flex;
  justify-content: space-between;
`;
