// eslint-disable-next-line import/no-unresolved
import styled, { css } from 'styled-components';

import { propsChecker, mediaProperty } from '../helpers';

export default styled.div`
  margin-left: auto;
  margin-right: auto;
  ${props => props.fluid && css`
    ${mediaProperty(props, propsChecker(props, 'gridFluid'), 'padding-left')};
    ${mediaProperty(props, propsChecker(props, 'gridFluid'), 'padding-right')};
  `}
`;
