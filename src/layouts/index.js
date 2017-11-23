import React from 'react';
import { Title, Container, Navigation, Content } from '../components';

export default ({ children, data: { site } }) => (
  <Container>
    <Title>{site.siteMetadata.title}</Title>
    <Navigation />
    <Content>{children()}</Content>
  </Container>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
