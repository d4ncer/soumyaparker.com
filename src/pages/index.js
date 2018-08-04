import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import styles from '../utils/styles';
import Layout from '../components/layout';
import BgImage from '../components/bg-image';

const IntroContainer = styled.div`
  position: relative;
  width: 100%;
  top: -2rem;
  display: flex;
  margin: 0;
  padding: 0 2rem;
  text-align: center;

  @media (min-width: ${styles.sizes.sm}) {
    top: -2.5rem;
  }

  @media (min-width: ${styles.sizes.md}) {
    text-align: left;
    position: absolute;
    top: unset;
    margin: 0 5rem;
    padding: 0;
    bottom: 13rem;
    width: 30vw;
  }

  @media (min-width: ${styles.sizes.lg}) {
    bottom: 18rem;
    width: 40vw;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    bottom: 10rem;
    width: 35vw;
  }
`;

const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 1.5rem;
  color: ${styles.color.primary};
  line-height: 1.5;
  letter-spacing: 0.04rem;

  @media (min-width: ${styles.sizes.sm}) {
    font-size: 1.875rem;
  }

  @media (min-width: ${styles.sizes.md}) {
    font-size: 2rem;
  }

  @media (min-width: ${styles.sizes.lg}) {
    font-size: 2.875rem;
  }
`;

const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 1.25rem;
  color: ${styles.color.primary};
  line-height: 1.25;
  letter-spacing: 0.04rem;

  @media (min-width: ${styles.sizes.sm}) {
    font-size: 1.5rem;
  }

  @media (min-width: ${styles.sizes.md}) {
    font-size: 1.875rem;
  }

  @media (min-width: ${styles.sizes.lg}) {
    font-size: 2.5rem;
  }
`;

const HeroContainer = styled.div`
  position: relative;
`;

const HelpContainer = styled.div`
  width: 100%;
  margin: 3vh auto;
  padding: 0 2rem;
  position: relative;
  text-align: center;
  top: 0rem;

  @media (min-width: ${styles.sizes.md}) {
    top: -3rem;
  }

  @media (min-width: ${styles.sizes.lg}) {
    width: 62rem;
    margin: 4vh auto;
    padding: 0;
    top: -6rem;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    width: 90rem;
    margin: 6vh auto;
  }
`;

const HelpItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const HelpItem = styled.div`
  flex: 0 1 100%;
  width: 100%;
  margin: 2rem;
  padding: 0;

  @media (min-width: ${styles.sizes.md}) {
    flex: 0 1 calc(100% / 3);
    margin: 0;
  }

  @media (min-width: ${styles.sizes.lg}) {
  }
`;

const IndexPage = ({ data }) => (
  <Layout>
    <>
      <HeroContainer>
        <BgImage fluid={data.headerImage.childImageSharp.fluid} />
        <IntroContainer>
          <H1>Hi, my name is Soumya and I am a designer & an illustrator</H1>
        </IntroContainer>
      </HeroContainer>
      <HelpContainer>
        <H2>Here's how I can help...</H2>
        <HelpItems>
          <HelpItem>
            <BgImage fluid={data.graphicImage.childImageSharp.fluid} />
          </HelpItem>
          <HelpItem>
            <BgImage fluid={data.drawImage.childImageSharp.fluid} />
          </HelpItem>
          <HelpItem>
            <BgImage fluid={data.brandImage.childImageSharp.fluid} />
          </HelpItem>
        </HelpItems>
      </HelpContainer>
    </>
  </Layout>
);

export const query = graphql`
  query HeaderImgQuery {
    headerImage: file(relativePath: { eq: "header-2.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    drawImage: file(relativePath: { eq: "draw-01.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    graphicImage: file(relativePath: { eq: "graphic-01.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    brandImage: file(relativePath: { eq: "brand-01.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
