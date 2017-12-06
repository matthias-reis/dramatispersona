import React from 'react';
import Md from 'react-markdown';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { Background } from '.';

export default ({ raw }) => {
  return <Md>{raw}</Md>;
};
