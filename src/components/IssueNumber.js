import React from 'react';
import styled from 'styled-components';
import { Background } from '.';
import {
  FONT_4,
  SPACE_M,
  SPACE_2XL,
  LINE_HEIGHT,
  COL_TEXT_BRIGHT
} from '../config/style';

const IssueNumber = styled.div`
  background: ${props => props.theme.bg('sd', 0)};
  color: ${props => props.theme.text('sd', 0)};
  position: relative;
  p {
    position: absolute;
    bottom: ${SPACE_M};
    left: ${SPACE_M};
    margin: 0;
    font-weight: 700;
    font-size: ${FONT_4};
    line-height: 1;
  }
`;

export default ({ meta }) => {
  return (
    <IssueNumber>
      <p>{meta.issue}</p>
    </IssueNumber>
  );
};
