import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import headerImg from '../assets/header.png';
import Layout from '../components/layout';

const ImageContainer = styled.div`
  overflow: hidden;
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
    <>
      <ImageContainer>
        <HeaderImage alt="header" src={headerImg} />
      </ImageContainer>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
    </>
  </Layout>
);

export default IndexPage;
