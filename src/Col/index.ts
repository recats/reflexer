import styled from 'styled-components';
import { IProps } from './../types';

import { checkWidth, mediaProperty, propsChecker } from '../helpers';

export default styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  ${(props: IProps) => mediaProperty(props, propsChecker(props, 'colGutter'), 'padding-left')};
  ${(props: IProps) => mediaProperty(props, propsChecker(props, 'colGutter'), 'padding-right')};
  ${(props: IProps) => props.order && mediaProperty(props, props.order, 'order')};
  ${(props: IProps) => props.offset && mediaProperty(props, props.offset, 'margin-left', true)};
  ${(props: IProps) => props.basis && checkWidth(props, props.basis)};
`;
