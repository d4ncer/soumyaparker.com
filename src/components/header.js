import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import styles from '../utils/styles';

const HeaderContainer = styled.div`
  width: 90rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 6vh auto;
  padding: 0;

  @media (max-width: 1600px) {
    width: 64rem;
    margin: 5vh auto;
  }

  @media (max-width: 1088px) {
    width: 100%;
    margin: 3vh auto;
    padding: 0 2rem;
  }
`;

const SiteTitle = styled.h1`
  color: ${styles.color.test};
  font-family: ${styles.font.serif};
  font-weight: normal;
  margin: 0;
  letter-spacing: 0.03rem;
  font-size: 1.875rem;

  @media (max-width: 1600px) {
    font-size: 1.4375rem;
  }

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

const SiteLinks = styled.ul`
  list-style-type: none;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SiteLinkItem = styled.li`
  font-family: ${styles.font.sans};
  color: ${styles.color.test};
  text-transform: uppercase;
  margin-left: 2.4375rem;
  letter-spacing: 0.05rem;
  font-size: 1.4375rem;
  font-weight: normal;

  @media (max-width: 1600px) {
    font-size: 1.25rem;
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const SiteLink = styled(Link)`
  text-decoration: none;
  color: ${styles.color.test};
  cursor: pointer;
`;

const activeLinkStyles = {
  paddingBottom: '0.75rem',
  borderBottom: `0.25rem solid ${styles.color.primary}`,
};

const Header = () => (
  <HeaderContainer>
    <SiteTitle>
      <SiteLink to="/">Soumya Parker</SiteLink>
    </SiteTitle>
    <SiteLinks>
      <SiteLinkItem>
        <SiteLink to="/projects" activeStyle={activeLinkStyles}>
          Projects
        </SiteLink>
      </SiteLinkItem>
      <SiteLinkItem>
        <SiteLink to="/about" activeStyle={activeLinkStyles}>
          About
        </SiteLink>
      </SiteLinkItem>
    </SiteLinks>
  </HeaderContainer>
);

export default Header;
