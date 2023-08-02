import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const MatriceTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const matriceList = frontmatter.matrice || [];

  return (
    <Layout title={frontmatter.title}>
      <MatriceWrapper>
        <MatriceTabView>
          {matriceList.map((matrice) => {
            const matriceImage = getImage(matrice.icon);

            return (
              <MatriceTab key={matrice.name}>
                <MatriceBlock>
                  <Link to={`/matrices/${matrice.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <MatriceIconWrapper>
                      <MatriceIcon image={matriceImage} alt={matrice.name} />
                      <MatriceName>{matrice.name}</MatriceName>
                    </MatriceIconWrapper>
                  </Link>
                </MatriceBlock>
              </MatriceTab>
            );
          })}
        </MatriceTabView>

        <MatriceCopy dangerouslySetInnerHTML={{ __html: html }} />
      </MatriceWrapper>
    </Layout>
  );
};

export default MatriceTemplate;

const MatriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 1rem;
    padding-left: 30px;
  }
`;


const MatriceTabView = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-row-gap: 0.5rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const MatriceTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 150px;
`;

const MatriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const MatriceIconWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const MatriceIcon = styled(GatsbyImage)`
  display: block;
  height: 150px;
  width: 120px;
  border-radius: 8px;
  overflow: hidden;
  background-image: linear-gradient(45deg, #017CB9, #001E3C);
`;

const MatriceName = styled.span`
  position: absolute;
  bottom: 0.1px;
  right: 0.1px;
  padding-top: 0.2rem;
  padding-left: 0.4rem;
  color: white;
  background-color: rgba(20, 20, 20, 0.2);
  text-decoration: none;
  text-align: left;
  border-radius: 0px;
  text-transform: uppercase;
  width: 120px;
  height: 30px; /* Adjust the height as desired */
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-bottom: 0.1px;
`;

const MatriceCopy = styled.div`
  max-width: 60ch;

  & p {
    font-size: var(--size-400);
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        matrice {
          name
          icon {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: PNG
                height: 220
                transformOptions: { fit: COVER, cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`;
