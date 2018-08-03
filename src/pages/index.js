import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import styles from '../utils/styles';
import Layout from '../components/layout';
import BgImage from '../components/bg-image';

const IntroContainer = styled.div`
  position: relative;
  width: 100%;
  top: -3rem;
  display: flex;
  margin: 0;
  padding: 0 2rem;

  @media (min-width: ${styles.sizes.sm}) {
    top: -5rem;
  }

  @media (min-width: ${styles.sizes.sm}) {
    top: -7rem;
  }

  @media (min-width: ${styles.sizes.lg}) {
    position: absolute;
    margin: 0 5rem;
    padding: 0;
    top: 22rem;
    width: 40vw;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    top: 27rem;
    width: 35vw;
  }
`;

const Intro = styled.p`
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

const IndexPage = ({ data }) => (
  <Layout>
    <>
      <BgImage fluid={data.headerImage.childImageSharp.fluid} />
      <IntroContainer>
        <Intro>
          Hi, my name is Soumya and I am a designer & an illustrator
        </Intro>
      </IntroContainer>
    </>
  </Layout>
);

export const pageQuery = graphql`
  query HeaderImgQuery {
    headerImage: file(relativePath: { eq: "header-2.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
