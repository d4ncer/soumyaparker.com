import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';

/* const sansFont = 'Raleway, sans-serif'; */
const serifFont = 'Playfair Display, serif';

const Wrapper = styled.div`
  font-family: ${serifFont};
`;

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={d => (
      <>
        <Helmet
          title={d.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'Soumya Parker is a visual & aspiring UI/UX designer based out of Auckland, New Zealand.',
            },
            { name: 'keywords', content: 'designer,graphic,ui,ux' },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display|Raleway:500,500i"
            rel="stylesheet"
          />
        </Helmet>
        <Wrapper>{children}</Wrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
