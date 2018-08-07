import React from 'react';
import styled from 'styled-components';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import Layout from '../components/layout';
import { ComingSoon } from '../components/shared';
import { H2, P } from '../utils/type';

import styles from '../utils/styles';

const A = styled(OutboundLink)`
  color: ${styles.color.grey};
  cursor: pointer;

  &:hover {
    color: ${styles.color.interact};
  }
`;

const ProjectsPage = () => (
  <Layout>
    <ComingSoon>
      <H2>Under construction</H2>
      <P>
        You can see my work on{' '}
        <A href="https://www.behance.net/soumyaparker">Behance</A> in the
        meantime.
      </P>
    </ComingSoon>
  </Layout>
);

export default ProjectsPage;
