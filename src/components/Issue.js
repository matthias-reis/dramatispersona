import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Contact } from '.';
import { createTheme } from '../config/style';

const Issue = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

const Main = styled.main`
  flex: 1 1 auto;
`;

export default ({ children, meta, comment }) => {
  return (
    <ThemeProvider theme={createTheme(meta.colorset)}>
      <Issue>
        <Main>{children}</Main>
        <Contact meta={meta} comment={comment} />
      </Issue>
    </ThemeProvider>
  );
};
