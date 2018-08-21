// @flow
import type { Node } from 'react';
import React from 'react';
// $FlowIssues
import styled from 'styled-components';
import { Grid } from './styled';

type Props = {
  children: Node,
  fluid?: boolean,
  tag?: string,
}

const Styled = styled(({
  children, fluid, tag = 'div', ...props
}: Props) => React.createElement(
  tag,
  props,
  children,
))`${Grid}`;

const GridElement = (props: Props) => <Styled {...props} />;

GridElement.defaultProps = {
  tag: 'div',
  fluid: false,
};

// $FlowIssues
export default GridElement;
