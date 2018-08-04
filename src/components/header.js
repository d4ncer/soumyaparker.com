import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import styles from '../utils/styles';

const HeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 3vh auto;
  padding: 0 2rem;
  z-index: 99;

  @media (min-width: ${styles.sizes.lg}) {
    width: 62rem;
    margin: 4vh auto;
    padding: 0;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    width: 90rem;
    margin: 6vh auto;
  }
`;

const SiteTitle = styled.h1`
  color: ${styles.color.grey};
  font-family: ${styles.font.serif};
  font-weight: normal;
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.03rem;

  @media (min-width: ${styles.sizes.sm}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${styles.sizes.md}) {
    font-size: 1rem;
  }

  @media (min-width: ${styles.sizes.lg}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    font-size: 1.875rem;
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
  color: ${styles.color.grey};
  text-transform: uppercase;
  margin-left: 2.4375rem;
  letter-spacing: 0.05rem;
  font-size: 0.8rem;
  font-weight: normal;

  @media (min-width: ${styles.sizes.sm}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${styles.sizes.md}) {
    font-size: 1rem;
  }

  @media (min-width: ${styles.sizes.lg}) {
    font-size: 1.25rem;
  }

  @media (min-width: ${styles.sizes.xlg}) {
    font-size: 1.475rem;
  }
`;

const SiteLink = styled(Link)`
  text-decoration: none;
  color: ${styles.color.grey};
  cursor: pointer;

  &:hover {
    color: ${styles.color.interact};
  }
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
