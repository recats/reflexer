import styled from 'styled-components';

import { propsChecker } from '../helpers';

// eslint-disable-next-line
export const Grid = styled.div`
  margin-left: auto;
  margin-right: auto;
  ${props => props.fluid && `
    padding-right: ${propsChecker(props, 'gridFluid')};
    padding-left: ${propsChecker(props, 'gridFluid')};
  `}
`;
