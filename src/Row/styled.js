import { css } from 'styled-components';
import { mediaProperty, propsChecker } from '../helpers';

// eslint-disable-next-line
export const Row = props => css`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  ${mediaProperty(props, propsChecker(props, 'rowGutter'), 'margin-left')};
  ${mediaProperty(props, propsChecker(props, 'rowGutter'), 'margin-right')};
  ${props.flexDirection && mediaProperty(props, props.flexDirection, 'flex-direction')};
  ${props.flexWrap && mediaProperty(props, props.flexWrap, 'flex-wrap')};
  ${props.justifyContent && mediaProperty(props, props.justifyContent, 'justify-content')};
  ${props.alignItems && mediaProperty(props, props.alignItems, 'align-items')};
  ${props.alignContent && mediaProperty(props, props.alignContent, 'align-content')};
`;
