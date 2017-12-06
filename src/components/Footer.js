import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { COL_NEUTRAL_BRIGHT } from '../config/style';

const Footer = styled.footer`
  height: 300px;
  background: ${COL_NEUTRAL_BRIGHT};
  padding: 20px;
`;

const activeClassName = 'nav-item-active';

const NavLink = styled(Link).attrs({
  activeClassName
})`
  color: #ffffff;

  &.${activeClassName} {
    border-bottom: 3px solid #666;
  }
`;

export default () => (
  <Footer>
    <NavLink to="/">Overview</NavLink>
  </Footer>
);
