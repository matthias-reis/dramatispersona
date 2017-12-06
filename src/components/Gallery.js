import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Background } from '.';
import { SPACE_M, COL_TEXT_BRIGHT } from '../config/style';

const Gallery = styled.div`
  display: grid;
  grid-gap: ${SPACE_M};
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(4, 1fr);
`;

const Img = styled.img`
  width: 100%;
  border: 3px solid white;
  margin: 0;
`;

const Title = styled.div`
  grid-area: t;
  grid-column: 1 / span 2;
  grid-row: 2;
  background: rgba(0, 0, 0, 0.5);
  color: ${COL_TEXT_BRIGHT};
`;

export default ({ meta }) => (
  <Gallery>
    <Title>
      <h3>Hallo</h3>
      <p>I bims</p>
    </Title>
    {Array(10)
      .fill('')
      .map((_, i) => (
        <Img
          src={`https://placeimg.com/400/400/arch/grayscale?${i}`}
          key={i}
          alt="gallery"
        />
      ))}
  </Gallery>
);
