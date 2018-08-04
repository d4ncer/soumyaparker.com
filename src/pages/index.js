import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import styles from '../utils/styles';
import { H1, H2, AltH3, H3, P } from '../utils/type';
import Layout from '../components/layout';
import BgImage from '../components/bg-image';

const IntroContainer = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  display: flex;
  margin: 0;
  padding: 0 2rem;
  text-align: center;

  @media (min-width: ${styles.sizes.md}) {
    text-align: left;
    position: absolute;
    top: unset;
    margin: 0 5rem;
    padding: 0;
    bottom: 5rem;
    width: 30vw;
  }

  @media (min-width: ${styles.sizes.lg}) {
    bottom: 10rem;
    width: 40vw;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    bottom: 20rem;
    width: 35vw;
  }
`;

const HeroContainer = styled.div`
  position: relative;
`;

const HelpContainer = styled.div`
  width: 100%;
  margin: 3rem auto 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (min-width: ${styles.sizes.lg}) {
    width: 62rem;
    margin: 7rem auto 0 auto;
    padding: 0;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    width: 90rem;
  }
`;

const HelpItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0rem;

  @media (min-width: ${styles.sizes.md}) {
    flex-wrap: unset;
    display: grid;
    grid-template-columns: calc(100% / 3) calc(100% / 3) calc(100% / 3);
    grid-template-rows: auto;
    grid-template-areas:
      'img1 img2 img3'
      'title1 title2 title3'
      'txt1 txt2 txt3';
    grid-row-gap: 1rem;
    grid-column-gap: 1rem;
    margin-top: 2rem;
  }
`;

const HelpTitle = styled(H3)`
  display: block;
  height: auto;
  width: 100%;
  margin-top: 0.75rem;

  @media (min-width: ${styles.sizes.md}) {
    margin-top: 2rem;
    text-align: left;
    grid-area: ${({ gridArea }) => gridArea};
  }
`;

const HelpText = styled(P)`
  display: block;
  height: auto;
  width: 100%;
  margin-top: 0.75rem;

  @media (min-width: ${styles.sizes.md}) {
    margin-top: 0;
    text-align: left;
    grid-area: ${({ gridArea }) => gridArea};
  }
`;

const HelpImageWrapper = styled.div`
  display: block;
  height: auto;
  width: 100%;
  margin-top: 3.157rem;

  @media (min-width: ${styles.sizes.md}) {
    margin-top: 0;
    grid-area: ${({ gridArea }) => gridArea};
  }
`;

const CTAContainer = styled.div`
  width: 100%;
  margin: 3rem auto 0 auto;
  padding: 0 2rem;
  text-align: center;

  @media (min-width: ${styles.sizes.md}) {
    width: 25rem;
    padding: 0;
  }

  @media (min-width: ${styles.sizes.lg}) {
    width: 40rem;
    padding: 0;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    width: 90rem;
  }
`;

const CTATitle = styled(H1)``;
const CTA = styled(AltH3)`
  margin: 1.333rem 0 1.777rem 0;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: #333;
  }

  > a {
    text-decoration: none;
    color: inherit;
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
        <H2>Here's how I can help</H2>
        <HelpItems>
          <HelpImageWrapper gridArea="img1">
            <BgImage fluid={data.graphicImage.childImageSharp.fluid} />
          </HelpImageWrapper>
          <HelpTitle gridArea="title1">
            Do you need print/web/digital collaterals?
          </HelpTitle>
          <HelpText gridArea="txt1">
            It’s fun if you sing it to the tune of Frozen’s “Do you want to
            build a snowman”. Are you just starting out and are looking to build
            an identity for your brand? Or perhaps you want to design a better
            experience for your customers?
          </HelpText>
          <HelpImageWrapper gridArea="img2">
            <BgImage fluid={data.drawImage.childImageSharp.fluid} />
          </HelpImageWrapper>
          <HelpTitle gridArea="title2">Do you need something drawn?</HelpTitle>
          <HelpText gridArea="txt2">
            Looking for a way to be able to tell your story better? To help
            consumers understand the product? or just want to commission a
            piece.
          </HelpText>
          <HelpImageWrapper gridArea="img3">
            <BgImage fluid={data.brandImage.childImageSharp.fluid} />
          </HelpImageWrapper>
          <HelpTitle gridArea="title3">Do you want to build a brand?</HelpTitle>
          <HelpText gridArea="txt3">
            Books? Posters? Brochures? Pamphlets? Menus? Digital ads, digital
            banners, website graphics? Things that look good, but more
            importantly work better.
          </HelpText>
        </HelpItems>
      </HelpContainer>
      <CTAContainer>
        <CTATitle>Say hi!</CTATitle>
        <CTA>
          <a href="mailto:soumyaparker@gmail.com">soumyaparker@gmail.com</a>
        </CTA>
        <P style={{ marginBottom: '0.75rem' }}>
          If you have an interesting project in mind, would like to collaborate
          on something cool, or are in the neighbourhood and want to chat, get
          in touch!
        </P>
        <P>I am available for freelance projects and full-time employment.</P>
      </CTAContainer>
    </>
  </Layout>
);

export const query = graphql`
  query HeaderImgQuery {
    headerImage: file(relativePath: { eq: "header.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 2400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    drawImage: file(relativePath: { eq: "draw.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    graphicImage: file(relativePath: { eq: "graphic.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    brandImage: file(relativePath: { eq: "brand.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default IndexPage;
