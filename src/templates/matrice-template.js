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
      <MatriceTitle>{frontmatter.title}</MatriceTitle>
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

const MatriceTitle = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const MatriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center the content horizontally */
  height: 100%;
  margin: 0 auto; /* This will center the MatriceWrapper horizontally */

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 1rem;
    padding-left: 30px;
  }
`;

const MatriceTabView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 0.5rem;

  @media screen and (max-width: 480px) {
    /* For smaller smartphones */
    grid-template-columns: repeat(2, 1fr);
    /* You can also adjust the font-size here if needed */
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    /* For larger smartphones and small tablets */
    grid-template-columns: repeat(3, 1fr);
    /* You can adjust the font-size here if needed */
  }

  @media screen and (min-width: 769px) and (max-width: 1200px) {
    /* For medium-sized tablets and laptops */
    grid-template-columns: repeat(4, 1fr);
    /* You can adjust the font-size here if needed */
  }

  @media screen and (min-width: 1201px) {
    /* For larger laptops and desktops */
    grid-template-columns: repeat(8, 1fr);
    /* You can adjust the font-size here if needed */
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
