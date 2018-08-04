import styled from 'styled-components';

import styles from './styles';

export const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 1.777rem;
  color: ${styles.color.primary};
  line-height: 1.5;
  letter-spacing: 0.04rem;

  @media (min-width: ${styles.sizes.md}) {
    font-size: 2.369rem;
  }

  @media (min-width: ${styles.sizes.lg}) {
    font-size: 3.157rem;
  }
`;

export const H2 = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 1.333rem;
  color: ${styles.color.primary};
  line-height: 1.5;
  letter-spacing: 0.04rem;

  @media (min-width: ${styles.sizes.md}) {
    font-size: 1.777rem;
  }

  @media (min-width: ${styles.sizes.lg}) {
    font-size: 2.369rem;
  }
`;

export const H3 = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: normal;
  font-size: 1rem;
  color: ${styles.color.primary};
  line-height: 1.5;
  letter-spacing: 0.04rem;

  @media (min-width: ${styles.sizes.sm}) {
    font-size: 1.333rem;
  }
`;

export const AltH3 = styled(H3)`
  color: ${styles.color.test};
`;

export const P = styled.p`
  font-family: ${styles.font.sans};
  font-size: 0.8125rem;
  line-height: 1.75;
  padding: 0;
  margin: 0;
  color: ${styles.color.test};

  @media (min-width: ${styles.sizes.lg}) {
    font-size: 1rem;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    font-size: 1.333rem;
  }
`;
