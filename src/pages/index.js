import React from 'react';
import { graphql } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
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
    grid-template-columns: 1fr 1fr 1fr;
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
    color: ${styles.color.interact};
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
        <H2>What I can do for you</H2>
        <HelpItems>
          <HelpImageWrapper gridArea="img1">
            <BgImage fluid={data.graphicImage.childImageSharp.fluid} />
          </HelpImageWrapper>
          <HelpTitle gridArea="title1">Visual Communication</HelpTitle>
          <HelpText gridArea="txt1">
            From books to digital ads, I can help you design & execute a
            strategy across channels to help you communicate your message
            clearly and effectively.
          </HelpText>
          <HelpImageWrapper gridArea="img2">
            <BgImage fluid={data.drawImage.childImageSharp.fluid} />
          </HelpImageWrapper>
          <HelpTitle gridArea="title2">Illustration</HelpTitle>
          <HelpText gridArea="txt2">
            I can help you tell your story better through illustrations crafted
            to delight & inform. I'm also open to comissioned work.
          </HelpText>
          <HelpImageWrapper gridArea="img3">
            <BgImage fluid={data.brandImage.childImageSharp.fluid} />
          </HelpImageWrapper>
          <HelpTitle gridArea="title3">Identity & Brand</HelpTitle>
          <HelpText gridArea="txt3">
            Whether it's creating a new identity for a product or tweaking an
            existing brand for an everchanging global market, I can help distill
            your core values & practices into a robust & multifacted identity.
          </HelpText>
        </HelpItems>
      </HelpContainer>
      <CTAContainer>
        <CTATitle>Say hi!</CTATitle>
        <CTA>
          <OutboundLink href="mailto:soumyaparker@gmail.com">
            soumyaparker@gmail.com
          </OutboundLink>
        </CTA>
        <P style={{ marginBottom: '0.75rem' }}>
          If you have an interesting project in mind, would like to collaborate
          on something cool, or are in the neighbourhood and want to chat, get
          in touch!
        </P>
        <P>
          I am currently unavailable for freelance projects or full-time
          employment.
        </P>
      </CTAContainer>
    </>
  </Layout>
);

export const query = graphql`
  query ImagesQuery {
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
