import React from 'react';
import styled from 'styled-components';
import { Background } from '.';
import {
  SPACE_2XL,
  SPACE_M,
  TEXT_WIDTH,
  FONT_1,
  LINE_HEIGHT
} from '../config/style';

const Title = styled.div`
  background: ${props => props.theme.bg('p', 1)};
  color: ${props => props.theme.text('p', 1)};
  padding: 10px;
  padding: ${SPACE_2XL} ${SPACE_M} ${SPACE_M} ${SPACE_M};
  grid-column-start: span 2;
  text-align: right;
  h1 {
    max-width: ${TEXT_WIDTH};
    margin: 0 0 0 auto;
    font-weight: 300;
    color: ${props => props.theme.strong('p', 1)};
  }

  p {
    max-width: ${TEXT_WIDTH};
    margin: 0 0 0 auto;
    font-size: ${FONT_1};
    line-height: ${LINE_HEIGHT};
  }
`;

export default ({ meta }) => (
  <Title>
    <h1>{meta.title}</h1>
    <p>{meta.subtitle}</p>
  </Title>
);
