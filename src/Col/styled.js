/* eslint arrow-body-style: ["error", "as-needed"] */
import { css } from 'styled-components';

import { checkWidth, mediaProperty, checkPercent, propsChecker } from '../helpers';

// eslint-disable-next-line
export const Col = props => css`
  box-sizing: border-box;
  flex: 0 0 auto;
  ${mediaProperty(propsChecker(props, 'colGutter'), 'padding-left')};
  ${mediaProperty(propsChecker(props, 'colGutter'), 'padding-right')};
  ${props.order && mediaProperty(props.order, 'order')};
  ${props.offset && mediaProperty(props.offset, 'margin-left', checkPercent)};
  ${props.basis && checkWidth(props.basis)};
`;
