import React from 'react';
import styled from 'styled-components';
import { SPACE_M } from '../config/style';

const Section = styled.section`
  background: ${props =>
    props.theme.bg(props.spectrum || 'p', props.brightness || 1)};
  color: ${props =>
    props.theme.text(props.spectrum || 'p', props.brightness || 1)};
  padding: ${SPACE_M};
`;

const InnerSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${props => `repeat(${props.grid}, 1fr)`};
`;

export default ({ children, brightness, spectrum, grid = 4 }) => (
  <Section brightness={brightness} spectrum={spectrum}>
    <InnerSection grid={grid}>{children}</InnerSection>
  </Section>
);
