// @flow
import type { Node } from 'react';
import React from 'react';
// $FlowIssues
import styled from 'styled-components';
import { Grid } from './styled';

type Props = {
  children: Node,
  fluid?: boolean,
  as?: string,
}

const Styled = styled(({
  children, fluid, as = 'div', ...props
}: Props) => React.createElement(
  as,
  props,
  children,
))`${Grid}`;

const GridElement = (props: Props) => <Styled {...props} />;

GridElement.defaultProps = {
  as: 'div',
  fluid: false,
};

// $FlowIssues
export default GridElement;
