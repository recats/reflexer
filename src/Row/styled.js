import styled from 'styled-components';
import { mediaProperty, theme } from '../helpers';


// eslint-disable-next-line
export const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  margin-right: ${theme.rowGutter};
  margin-left: ${theme.rowGutter};
  ${props => props.flexDirection && mediaProperty(props.flexDirection, 'flex-direction')};
  ${props => props.alignItems && mediaProperty(props.alignItems, 'align-items')};
  ${props => props.flexWrap && mediaProperty(props.flexWrap, 'flex-wrap')};
  ${props => props.alignContent && mediaProperty(props.alignContent, 'align-content')};
`;
