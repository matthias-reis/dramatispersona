import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const NavBar = styled.div`
  display: flex;
  padding: 12px;
  border-bottom: 1px solid #ccc: 12px;
`;

const activeClassName = 'nav-item-active';

const NavLink = styled(Link).attrs({
  activeClassName
})`
  flex: 1 1 auto;
  padding: 12px;

  &.${activeClassName} {
    border-bottom: 3px solid #666;
  }
`;

export default () => (
  <NavBar>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/page-2">Other</NavLink>
  </NavBar>
);
