import styled, { css } from 'styled-components';
import { IProps } from '../types';

import { mediaProperty, propsChecker } from '../helpers';

export default styled('div').withConfig({
  shouldForwardProp: prop => !['fluid'].includes(prop),
})`
  margin-left: auto;
  margin-right: auto;
  ${(props: IProps) => props.fluid && css`
    ${mediaProperty(props, propsChecker(props, 'gridFluid'), 'padding-left')};
    ${mediaProperty(props, propsChecker(props, 'gridFluid'), 'padding-right')};
  `}
`;
