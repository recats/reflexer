// eslint-disable-next-line import/no-unresolved
import styled from 'styled-components';
import safeMediaPropertyCheck from '../safeMediaPropertyCheck';
import { mediaProperty, propsChecker } from '../helpers';

export default styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  ${props => mediaProperty(props, propsChecker(props, 'rowGutter'), 'margin-left')};
  ${props => mediaProperty(props, propsChecker(props, 'rowGutter'), 'margin-right')};
  ${props => safeMediaPropertyCheck(props, 'flexDirection', 'flex-direction')};
  ${props => safeMediaPropertyCheck(props, 'flexWrap', 'flex-wrap')};
  ${props => safeMediaPropertyCheck(props, 'justifyContent', 'justify-content')};
  ${props => safeMediaPropertyCheck(props, 'alignItems', 'align-items')};
  ${props => safeMediaPropertyCheck(props, 'alignContent', 'align-content')};
`;
