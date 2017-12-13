import styled from 'styled-components';

import { theme } from '../helpers';

// eslint-disable-next-line
export const Grid = styled.div`
  margin-left: auto;
  margin-right: auto;

  ${props => props.fluid && `
    padding-right: ${theme.gridFluid};
    padding-left: ${theme.gridFluid};
  `}
`;
