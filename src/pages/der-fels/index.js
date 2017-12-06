import React from 'react';
import { Issue } from '../../components';
import Title from './_title';

export const data = {
  issue: '01',
  title: 'Der Fels',
  description:
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
};

export default () => (
  <Issue
    sections={[
      {
        ref: Title,
        strategy: 'title'
      },
      {
        ref: '2-story',
        strategy: 'immediate'
      },
      {
        ref: '3-story',
        strategy: 'inview'
      },
      {
        ref: 'comment',
        strategy: 'comment'
      }
    ]}
  />
);
