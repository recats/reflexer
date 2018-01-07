import styled from 'styled-components';
import { mediaProperty, propsChecker } from '../helpers';

// eslint-disable-next-line
export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  margin-right: ${props => propsChecker(props, 'rowGutter')};
  margin-left: ${props => propsChecker(props, 'rowGutter')};
  ${props => props.flexDirection && mediaProperty(props.flexDirection, 'flex-direction')};
  ${props => props.flexWrap && mediaProperty(props.flexWrap, 'flex-wrap')};
  ${props => props.justifyContent && mediaProperty(props.justifyContent, 'justify-content')};
  ${props => props.alignItems && mediaProperty(props.alignItems, 'align-items')};
  ${props => props.alignContent && mediaProperty(props.alignContent, 'align-content')};
`;
