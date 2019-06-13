import styled from 'styled-components';
import { mediaProperty, propsChecker } from '../helpers';
import safeMediaPropertyCheck from '../safeMediaPropertyCheck';
import { IProps } from './../types';

export default styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  ${(props: IProps) => mediaProperty(props, propsChecker(props, 'rowGutter'), 'margin-left')};
  ${(props: IProps) => mediaProperty(props, propsChecker(props, 'rowGutter'), 'margin-right')};
  ${(props: IProps) => safeMediaPropertyCheck(props, 'flexDirection', 'flex-direction')};
  ${(props: IProps) => safeMediaPropertyCheck(props, 'flexWrap', 'flex-wrap')};
  ${(props: IProps) => safeMediaPropertyCheck(props, 'justifyContent', 'justify-content')};
  ${(props: IProps) => safeMediaPropertyCheck(props, 'alignItems', 'align-items')};
  ${(props: IProps) => safeMediaPropertyCheck(props, 'alignContent', 'align-content')};
`;
