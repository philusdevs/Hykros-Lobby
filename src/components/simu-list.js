import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Tags from "./tags";

const SimulacraList = ({ posts }) => {
  const simulacraPosts = posts.filter(
    (post) => post.fields.contentType === "simulacra"
  );

  const SimulacraListItems = simulacraPosts.map(
    ({ frontmatter, fields, excerpt, timeToRead }) => {
      const { title, tags, date, description } = frontmatter;
      const { slug } = fields;

      return (
        <SimulacraListItem
          key={slug}
          tags={tags}
          title={title}
          date={date}
          slug={slug}
          timeToRead={timeToRead}
          description={description}
          excerpt={excerpt}
        />
      );
    }
  );

  return <StyledSimulacraList>{SimulacraListItems}</StyledSimulacraList>;
};

export default SimulacraList;

const SimulacraListItem = ({
  title,
  date,
  timeToRead,
  tags,
  excerpt,
  description,
  slug,
}) => {
  return (
    <StyledSimulacraListItem>
      <Tags tags={tags} />

      <SimulacraListTitle>
        <Link to={slug}>{title}</Link>
      </SimulacraListTitle>
      <SimulacraListExcerpt
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
      <SimulacraListMeta>
        <span>{date}</span>

        <span>{timeToRead} mins</span>
      </SimulacraListMeta>
    </StyledSimulacraListItem>
  );
};

const StyledSimulacraList = styled.ul`
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

const StyledSimulacraListItem = styled.li`
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

const SimulacraListTitle = styled.h2`
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

const SimulacraListExcerpt = styled.p`
  margin-top: auto;
  font-size: var(--size-400);
`;

const SimulacraListMeta = styled.div`
  margin-top: 2rem;
  font-size: var(--size-300);
  display: flex;
  justify-content: space-between;
`;
