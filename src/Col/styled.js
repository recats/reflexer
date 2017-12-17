/* eslint arrow-body-style: ["error", "as-needed"] */
import styled from 'styled-components';

import { checkWidth, mediaProperty, checkPercent, theme } from '../helpers';

// eslint-disable-next-line
export const Col = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${props => (
    props.theme ? props.theme.reflexer.colGutter : theme.reflexer.colGutter
  )};
  padding-left: ${props => (
    props.theme ? props.theme.reflexer.colGutter : theme.reflexer.colGutter
  )};
  ${props => props.order && mediaProperty(props.order, 'order')};
  ${props => props.offset && mediaProperty(props.offset, 'margin-left', checkPercent)};
  ${props => props.basis && checkWidth(props.basis)};
`;
