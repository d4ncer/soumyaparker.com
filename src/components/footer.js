import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

import BgImage from './bg-image';
import styles from '../utils/styles';

const FooterContainer = styled.div`
  position: relative;
  margin-top: 5rem;
`;

const SocialMediaContainer = styled.div`
  position: absolute;
  bottom: 3rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const SocialMediaImg = styled.div`
  margin-right: 1rem;
  height: 1.5rem;
  width: 1.5rem;

  @media (min-width: ${styles.sizes.md}) {
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }

  @media (min-width: ${styles.sizes.lg}) {
    height: 2.5rem;
    width: 2.5rem;
    margin-right: 2rem;
  }
`;

const A = styled.a`
  z-index: 99;
`;

const Footer = ({ backgroundImg, linkedInImg, behanceImg, instagramImg }) => (
  <FooterContainer>
    <BgImage fluid={backgroundImg} />
    <SocialMediaContainer>
      <SocialMediaImg>
        <A href="https://www.linkedin.com/in/soumya-parker-94934098/">
          <Image fluid={linkedInImg} />
        </A>
      </SocialMediaImg>
      <SocialMediaImg>
        <A href="https://www.behance.net/soumyaparker">
          <Image fluid={behanceImg} />
        </A>
      </SocialMediaImg>
      <SocialMediaImg>
        <A href="https://www.instagram.com/soumyaparker/">
          <Image fluid={instagramImg} />
        </A>
      </SocialMediaImg>
    </SocialMediaContainer>
  </FooterContainer>
);

export default Footer;
