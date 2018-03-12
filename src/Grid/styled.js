import { css } from 'styled-components';

import { propsChecker, mediaProperty } from '../helpers';

// eslint-disable-next-line
export const Grid = props => css`
  margin-left: auto;
  margin-right: auto;
  ${props.fluid && css`
    ${mediaProperty(propsChecker(props, 'gridFluid'), 'padding-left')};
    ${mediaProperty(propsChecker(props, 'gridFluid'), 'padding-right')};
  `}
`;
