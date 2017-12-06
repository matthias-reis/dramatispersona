import React from 'react';
import styled from 'styled-components';
import { Section, Background } from '.';

const Aside = styled.aside`
  background: ${({ theme }) => theme.bg('pd', 4)};
  color: ${({ theme }) => theme.text('pd', 4)};
  width: 300px;
  flex: 0 0 auto;
  margin-right: ${({ opened }) => (opened ? '0' : '-300px')};
  position: relative;
  transition: margin-right 300ms ease-in-out;
`;

const Trigger = styled.button`
  position: absolute;
  top: 10px;
  left: -50px;
`;

export default class extends React.Component {
  state = { opened: false };

  toggle = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    return (
      <Aside opened={this.state.opened}>
        <Trigger onClick={this.toggle}>toggle</Trigger>
        <h1>Contact</h1>
        <p>Opened: {this.state.opened ? 'yes' : 'no'}</p>
      </Aside>
    );
  }
}
