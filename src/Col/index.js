// @flow
import React from 'react';
import type { Node } from 'react';
import styled, { withTheme } from 'styled-components';

import { Col } from './styled';
import type { FlowMulti } from './const';

type Props = {
  children: Node,
  order?: FlowMulti,
  offset?: FlowMulti,
  basis: FlowMulti,
  theme?: Object,
};

const Styled = styled(({
  children, basis, order, offset, theme, ...props
}: Props) => React.createElement(
  'div',
  props,
  children,
))`${Col}`;

const ColElement = (props: Props) => <Styled {...props} />;

ColElement.defaultProps = {
  order: undefined,
  offset: undefined,
  theme: undefined,
};

// $FlowIssues
export default withTheme(ColElement);
