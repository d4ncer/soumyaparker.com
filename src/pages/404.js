import React from 'react';
import styled from 'styled-components';

import styles from '../utils/styles';
import { ComingSoon } from '../components/shared';
import Layout from '../components/layout';
import { H2, P } from '../utils/type';

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

const NotFoundPage = () => (
  <Layout>
    <ComingSoon>
      <TextContainer>
        <H2>You seem lost...</H2>
        <Text>*crickets*</Text>
      </TextContainer>
    </ComingSoon>
  </Layout>
);

export default NotFoundPage;
