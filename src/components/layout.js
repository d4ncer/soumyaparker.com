import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';
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
        footerImage: file(relativePath: { eq: "footer.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        linkedInImage: file(relativePath: { eq: "linkedin.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        behanceImage: file(relativePath: { eq: "behance.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        instagramImage: file(relativePath: { eq: "instagram.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
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
            href="https://fonts.googleapis.com/css?family=Playfair+Display|Raleway:300"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
        <Wrapper>{children}</Wrapper>
        <Footer
          instagramImg={d.instagramImage.childImageSharp.fluid}
          linkedInImg={d.linkedInImage.childImageSharp.fluid}
          behanceImg={d.behanceImage.childImageSharp.fluid}
          backgroundImg={d.footerImage.childImageSharp.fluid}
        />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
