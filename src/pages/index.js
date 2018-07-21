import React from 'react';
import styled from 'styled-components';

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

const IndexPage = () => (
  <Layout>
    <ImageContainer>
      <HeaderImage alt="header" src={headerImg} />
    </ImageContainer>
  </Layout>
);

export default IndexPage;
