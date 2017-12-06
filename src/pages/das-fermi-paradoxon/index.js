import React from 'react';
import styled from 'styled-components';

import {
  IssueTitle,
  IssueNumber,
  Issue,
  Section,
  FullSection,
  Md,
  Background,
  Gallery
} from '../../components';
import image from './main.jpg';
import story from 'raw-loader!./story.md';
import comment from 'raw-loader!./comment.md';

export const meta = {
  issue: '03',
  title: 'Das Fermi Paradoxon',
  subtitle: 'consetetur sadipscing elitr, sed diam',
  image,
  colorset: ['#D6254D', '#17829e'],
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
};

const Swatch = styled.div`
  background: ${props => props.theme.bg(props.spectrum, props.brightness)};
  border: 1px solid white;
  height: 100px;
`;

export default () => (
  <Issue meta={meta} comment={comment}>
    <FullSection id="title" grid={3}>
      <IssueTitle meta={meta} />
      <IssueNumber meta={meta} />
    </FullSection>
    <Section id="story" grid={2} spectrum="sd" brightness={5}>
      <Md raw={story} />
    </Section>
    <Section id="gallery" grid={1} spectrum="sd" brightness={0}>
      <Gallery album="1234" />
    </Section>
    <Section id="spectra" grid={6} spectrum="n" brightness={0}>
      {Array(6)
        .fill('')
        .map((_, i) => <Swatch spectrum="p" brightness={i} />)}
      {Array(6)
        .fill('')
        .map((_, i) => <Swatch spectrum="pd" brightness={i} />)}
      {Array(6)
        .fill('')
        .map((_, i) => <Swatch spectrum="s" brightness={i} />)}
      {Array(6)
        .fill('')
        .map((_, i) => <Swatch spectrum="sd" brightness={i} />)}
      {Array(6)
        .fill('')
        .map((_, i) => <Swatch spectrum="n" brightness={i} />)}
    </Section>
  </Issue>
);
