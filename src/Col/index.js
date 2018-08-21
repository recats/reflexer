// @flow
import React from 'react';
import type { Node } from 'react';
// $FlowIssues
import styled, { withTheme } from 'styled-components';

import { Col } from './styled';
import type { FlowMulti } from './const';

type Props = {
  children: Node,
  order?: FlowMulti,
  offset?: FlowMulti,
  basis: FlowMulti,
  theme?: Object,
  tag?: string,
};

const Styled = styled(({
  children, basis, order, offset, theme, tag = 'div', ...props
}: Props) => React.createElement(
  tag,
  props,
  children,
))`${Col}`;

const ColElement = (props: Props) => <Styled {...props} />;

ColElement.defaultProps = {
  tag: 'div',
  order: undefined,
  offset: undefined,
  theme: undefined,
};

// $FlowIssues
export default withTheme(ColElement);
