import styled from 'styled-components';

import { checkWidth, mediaProperty, propsChecker } from '../helpers';

export default styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  ${props => mediaProperty(props, propsChecker(props, 'colGutter'), 'padding-left')};
  ${props => mediaProperty(props, propsChecker(props, 'colGutter'), 'padding-right')};
  ${props => props.order && mediaProperty(props, props.order, 'order')};
  ${props => props.offset && mediaProperty(props, props.offset, 'margin-left', true)};
  ${props => props.basis && checkWidth(props, props.basis)};
`;
