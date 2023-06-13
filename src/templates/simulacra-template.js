import React from "react";
import { Link } from "gatsby";
import { navigate } from "gatsby-link";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const SimulacraTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const simulacraList = frontmatter.simulacra || [];

  return (
    <Layout title={frontmatter.title}>
      <SimulacraWrapper>
        <SimulacraTabView>
          {simulacraList.map((simulacrum) => {
            const simulacrumImage = getImage(simulacrum.icon);
            const bottomLeftOverlayImage = getImage(simulacrum.bottomLeftOverlay);
            const bottomRightOverlayImage = getImage(simulacrum.bottomRightOverlay);
            const bottomRightOverlayImage2 = getImage(simulacrum.bottomRightOverlay2);

            let gradientColors;
            switch (simulacrum.gradientColor) {
              case "Frost":
                gradientColors = "linear-gradient(#435B7A, #9BC1D1)";
                break;
              case "Volt":
                gradientColors = "linear-gradient(#5F4871, #CBA3D7)";
                break;
              case "Flame":
                gradientColors = "linear-gradient(#7F4F48, #DDBEA8)";
                break;
              case "Physical":
                gradientColors = "linear-gradient(#7A6449, #D3B88F)";
                break;
              case "Altered":
                gradientColors = "linear-gradient(#426A6F, #94B9BB)";
                break;
              default:
                gradientColors = "none";
            }

            return (
              <SimulacraTab key={simulacrum.name}>
                <SimulacraBlock onClick={() => navigate(`/simulacrum/${simulacrum.name.toLowerCase().replace(/\s+/g, "-")}`)}>
                  <SimulacraIconWrapper>
                    <SimulacraIcon
                      image={simulacrumImage}
                      alt={simulacrum.name}
                      gradientColors={gradientColors}
                    />
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
                  </SimulacraIconWrapper>
                  <SimulacraName>{simulacrum.name}</SimulacraName>
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

const SimulacraWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const SimulacraTabView = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
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
  width: 150px;
`;

const SimulacraIcon = styled(GatsbyImage)`
  display: block;
  height: 220px;
  width: 150px;
  border-radius: 8px;
  overflow: hidden;
  background-image: ${({ gradientColors }) => gradientColors};
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

const SimulacraName = styled.span`
  padding: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  color: inherit;
  background-color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  text-align: center;
  border-radius: 0px;
  border: 1px solid rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  border-radius: 4px;
  display: block;
  margin-top: var(--size-200);
  margin-bottom: var(--size-400);
  margin-left: 0px;
  margin-right: 0px;
  width: 150px;
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
              gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 20)
            }
          }
          bottomRightOverlay {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 25)
            }
          }
          bottomRightOverlay2 {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 25)
            }
          }
          gradientColor
        }
      }
    }
  }
`;
