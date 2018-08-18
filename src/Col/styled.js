/* eslint arrow-body-style: ["error", "as-needed"] */
import { css } from 'styled-components';

import { checkWidth, mediaProperty, propsChecker } from '../helpers';

// eslint-disable-next-line
export const Col = props => css`
  box-sizing: border-box;
  flex: 0 0 auto;
  ${mediaProperty(props, propsChecker(props, 'colGutter'), 'padding-left')};
  ${mediaProperty(props, propsChecker(props, 'colGutter'), 'padding-right')};
  ${props.order && mediaProperty(props, props.order, 'order')};
  ${props.offset && mediaProperty(props, props.offset, 'margin-left', true)};
  ${props.basis && checkWidth(props, props.basis)};
`;
