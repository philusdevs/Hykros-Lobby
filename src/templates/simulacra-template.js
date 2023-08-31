import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SimulacraTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const simulacraList = frontmatter.simulacra || [];

  return (
    <Layout title={frontmatter.title}>
      <SimulacraTitle>{frontmatter.title}</SimulacraTitle>
      <SimulacraWrapper>
        <SimulacraTabView>
          {simulacraList.map((simulacrum) => {
            const simulacrumImage = getImage(simulacrum.icon);
            const bottomLeftOverlayImage = getImage(simulacrum.bottomLeftOverlay);
            const bottomRightOverlayImage = getImage(simulacrum.bottomRightOverlay);
            const bottomRightOverlayImage2 = getImage(simulacrum.bottomRightOverlay2);
            const bottomRightOverlayImage3 = getImage(simulacrum.bottomRightOverlay3); // New optional field

            let gradientColors;
            switch (simulacrum.gradientColor) {
              case 'Frost':
                gradientColors = 'linear-gradient(#435B7A, #9BC1D1)';
                break;
              case 'Volt':
                gradientColors = 'linear-gradient(#5F4871, #CBA3D7)';
                break;
              case 'Flame':
                gradientColors = 'linear-gradient(#7F4F48, #DDBEA8)';
                break;
              case 'Physical':
                gradientColors = 'linear-gradient(#7A6449, #D3B88F)';
                break;
              case 'Physical&Flame':
                gradientColors = 'linear-gradient(#B59C78, #AD9A6E)';
                break;
              case 'Altered':
                gradientColors = 'linear-gradient(#426A6F, #94B9BB)';
                break;
              default:
                gradientColors = 'none';
            }

            return (
              <SimulacraTab key={simulacrum.name}>
                <SimulacraBlock>
                  <Link to={`/simulacra/${simulacrum.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <SimulacraIconWrapper>
                      <SimulacraIcon image={simulacrumImage} alt={simulacrum.name} gradientColors={gradientColors} />
                      <SimulacraName>{simulacrum.name}</SimulacraName>
                      {bottomLeftOverlayImage && (
                        <BottomLeftOverlayContainer>
                          <BottomLeftOverlay image={bottomLeftOverlayImage} alt="Bottom Left Overlay" />
                        </BottomLeftOverlayContainer>
                      )}
                      {bottomRightOverlayImage && (
                        <BottomRightOverlayContainer>
                          <BottomRightOverlay image={bottomRightOverlayImage} alt="Bottom Right Overlay" />
                        </BottomRightOverlayContainer>
                      )}
                      {bottomRightOverlayImage2 && (
                        <BottomRightOverlayContainer2>
                          <BottomRightOverlay2 image={bottomRightOverlayImage2} alt="Bottom Right Overlay 2" />
                        </BottomRightOverlayContainer2>
                      )}
                      {simulacrum.bottomRightOverlay3 && (
                        <BottomRightOverlayContainer3>
                          <BottomRightOverlay2 image={bottomRightOverlayImage3} alt="Bottom Right Overlay 3" />
                        </BottomRightOverlayContainer3>
                      )}
                    </SimulacraIconWrapper>
                  </Link>
                </SimulacraBlock>
              </SimulacraTab>
            );
          })}
        </SimulacraTabView>

        <SimulacraCopy dangerouslySetInnerHTML={{ __html: html }} />
      </SimulacraWrapper>
    </Layout>
  );
};

export default SimulacraTemplate;

const SimulacraTitle = styled.h1`
font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
`;
const SimulacraWrapper = styled.div`
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

const SimulacraTabView = styled.div`
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
  grid-template-columns: repeat(6, 1fr);
  /* You can adjust the font-size here if needed */
}
`;

const SimulacraTab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 180px;
`;

const SimulacraBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const SimulacraIconWrapper = styled.div`
  position: relative;
  width: 100%%;
`;

const SimulacraIcon = styled(GatsbyImage)`
  display: block;
  height: 220px;
  width: 150px;
  border-radius: 8px;
  overflow: hidden;
  background-image: ${({ gradientColors }) => gradientColors};
`;

const SimulacraName = styled.span`
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
  width: 150px;
  height: 30px; /* Adjust the height as desired */
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-bottom: 0.1px;
`;

const BottomLeftOverlayContainer = styled.div`
  position: absolute;
  top: 1px;
  bottom: 0;
  left: 0;
  z-index: 1;
  padding: 3px;
`;

const BottomRightOverlayContainer = styled.div`
  position: absolute;
  top: 187.5px;
  bottom: 0;
  right: 0px;
  z-index: 1;
  padding: 4.5px;
`;

const BottomRightOverlayContainer2 = styled.div`
  position: absolute;
  bottom: 3px;
  right: 0px;
  z-index: 1;
  padding-right: 33px;
`;

const BottomRightOverlayContainer3 = styled.div`
position: absolute;
top: 1px;
bottom: 0;
right: 0;
z-index: 1;
padding: 3px;
`;

const BottomLeftOverlay = styled(GatsbyImage)`
  width: 40px;
  height: 20px;
`;

const BottomRightOverlay = styled(GatsbyImage)`
  width: 30px;
  height: 25px;
`;

const BottomRightOverlay2 = styled(GatsbyImage)`
  width: 30px;
  height: 25px;
`;

const BottomRightOverlay3 = styled(GatsbyImage)`
width: 40px;
height: 20px;
`;

const SimulacraCopy = styled.div`
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
        simulacra {
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
          bottomLeftOverlay {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: PNG)
            }
          }
          bottomRightOverlay {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: PNG)
            }
          }
          bottomRightOverlay2 {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: PNG)
            }
          }
          bottomRightOverlay3 {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: PNG)
            }
          }
          gradientColor
        }
      }
    }
  }
`;
