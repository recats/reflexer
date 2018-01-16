import { css } from 'styled-components';

import { propsChecker } from '../helpers';

// eslint-disable-next-line
export const Grid = props => css`
  margin-left: auto;
  margin-right: auto;
  ${props.fluid && `
    padding-right: ${propsChecker(props, 'gridFluid')};
    padding-left: ${propsChecker(props, 'gridFluid')};
  `}
`;
