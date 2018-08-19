// @flow
import type { Node } from 'react';
import React from 'react';
// $FlowIssues
import styled from 'styled-components';
import { Grid } from './styled';

type Props = {
  children: Node,
  fluid?: boolean,
}

const Styled = styled(({
  children, fluid, ...props
}: Props) => React.createElement(
  'div',
  props,
  children,
))`${Grid}`;

const GridElement = (props: Props) => <Styled {...props} />;

GridElement.defaultProps = {
  fluid: false,
};

export default GridElement;
