import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import { COL_NEUTRAL } from '../config/style';

const Nav = styled.nav`
  width: 300px;
  flex: 0 0 auto;
  background: ${COL_NEUTRAL};
  margin-left: ${props => (props.opened ? '0' : '-300px')};
  position: relative;
  transition: margin-left 300ms ease-in-out;
`;

const Trigger = styled.button`
  position: absolute;
  top: 10px;
  right: -50px;
`;

export default class extends React.Component {
  state = { opened: false };

  toggle = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    return (
      <Nav opened={this.state.opened}>
        <Trigger onClick={this.toggle}>toggle</Trigger>
        <h1>Navigation</h1>
        <p>Opened: {this.state.opened ? 'yes' : 'no'}</p>
      </Nav>
    );
  }
}
