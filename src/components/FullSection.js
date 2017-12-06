import styled from 'styled-components';

export default styled.section`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.grid || 4}, 1fr)`};
  background: ${props =>
    props.theme.bg(props.spectrum || 'p', props.brightness || 1)};
  color: ${props =>
    props.theme.text(props.spectrum || 'p', props.brightness || 1)};
`;
