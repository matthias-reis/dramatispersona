import React from 'react';
import styled from 'styled-components';
import { Navigation, Contact, Footer } from '../components';

const Wrapper = styled.main`
  background: #fff;
  padding: 0;
  display: flex;
`;

export default ({ children }) => {
  return (
    <div>
      <Wrapper>
        <Navigation />
        {children()}
      </Wrapper>
      <Footer />
    </div>
  );
};
