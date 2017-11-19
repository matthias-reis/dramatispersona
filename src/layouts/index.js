import React from 'react';
import { Container, Navigation, Content } from '../components';

export default ({ children }) => (
  <Container>
    <Navigation />
    <Content>{children()}</Content>
  </Container>
);
