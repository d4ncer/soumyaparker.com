import React from 'react';
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
  bottom: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  @media (min-width: ${styles.sizes.lg}) {
    justify-content: flex-start;
  }
`;

const SocialMediaImg = styled.div`
  margin-right: 0.75rem;
  height: 1rem;
  width: 1rem;

  @media (min-width: ${styles.sizes.md}) {
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }

  @media (min-width: ${styles.sizes.lg}) {
    height: 3rem;
    width: 3rem;
    margin-right: 1.333rem;
  }
`;

const Footer = ({ backgroundImg, linkedInImg, behanceImg, instagramImg }) => (
  <FooterContainer>
    <BgImage fluid={backgroundImg} />
    <SocialMediaContainer>
      <SocialMediaImg>
        <Image fluid={linkedInImg} />
      </SocialMediaImg>
      <SocialMediaImg>
        <Image fluid={behanceImg} />
      </SocialMediaImg>
      <SocialMediaImg>
        <Image fluid={instagramImg} />
      </SocialMediaImg>
    </SocialMediaContainer>
  </FooterContainer>
);

export default Footer;
