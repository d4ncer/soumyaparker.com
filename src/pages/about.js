import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import styles from '../utils/styles';
import Layout from '../components/layout';
import { H2, P } from '../utils/type';
import BgImage from '../components/bg-image';

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  margin: 10rem auto 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (min-width: ${styles.sizes.md}) {
    width: 35rem;
    padding: 0;
  }

  @media (min-width: ${styles.sizes.lg}) {
    width: 55rem;
    padding: 0;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    width: 90rem;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  margin: 3rem auto 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (min-width: ${styles.sizes.md}) {
    width: 25rem;
    padding: 0;
    text-align: left;
  }

  @media (min-width: ${styles.sizes.lg}) {
    width: 40rem;
    padding: 0;
  }
`;

const Text = styled(P)`
  margin-top: 1rem;
`;

const A = styled(OutboundLink)`
  text-decoration: none;

  color: ${styles.color.primary};
  &:hover {
    color: ${darken(0.2, styles.color.primary)};
  }
`;

const AboutPage = ({ data }) => (
  <Layout>
    <>
      <ImgContainer>
        <BgImage fluid={data.aboutImage.childImageSharp.fluid} />
      </ImgContainer>
      <TextContainer>
        <H2>About</H2>
        <Text>
          I am currently a Junior Product Designer at{' '}
          <A href="https://hapara.com/">Hāpara</A>.
        </Text>
        <Text>
          Over the last seven years I have worked with various different types
          of organisations and individuals to help them better engage and
          communicate with their audience. My work has primarily been rooted in
          brand & identity, visual communication, and illustration and I am now
          exploring the digital product landscape via UI/UX.
        </Text>
      </TextContainer>
    </>
  </Layout>
);

export const query = graphql`
  query AboutQuery {
    aboutImage: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default AboutPage;
