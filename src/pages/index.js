import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import styles from '../utils/styles';
import headerImg from '../assets/header.png';
import Layout from '../components/layout';

const ImageContainer = styled.div`
  overflow: hidden;
  position: absolute;
  z-index: -1;
  top: 0;
`;

const HeaderImage = styled.img`
  width: 100%;
  height: auto;

  @media (max-width: 1024px) {
    width: 110%;
    position: relative;
    left: -2%;
  }
`;

const Header = styled.div`
  width: 64rem;
  margin: 4vh auto;
  padding: 0;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 1rem;
  }
`;

const SiteTitle = styled.h1`
  color: ${styles.color.test};
  font-family: ${styles.font.serif};
  font-weight: normal;
  letter-spacing: 0.03rem;
  font-size: 1.4375rem;

  @media (max-width: 1024px) {
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const IndexPage = () => (
  <Layout>
    <>
      <ImageContainer>
        <HeaderImage alt="header" src={headerImg} />
      </ImageContainer>
      <Header>
        <SiteTitle>Soumya Parker</SiteTitle>
      </Header>
    </>
  </Layout>
);

export default IndexPage;
