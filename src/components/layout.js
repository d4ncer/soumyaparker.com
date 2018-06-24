import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const sansFont = 'Raleway, sans-serif';
const serifFont = 'Playfair Display, serif';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display|Raleway:500,500i"
            rel="stylesheet"
          />
        </Helmet>
        <Header siteTitle={d.site.siteMetadata.title} />
        <Wrapper>{children}</Wrapper>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
