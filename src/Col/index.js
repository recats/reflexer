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
  as?: string,
};

const Styled = styled(({
  children, basis, order, offset, theme, as = 'div', ...props
}: Props) => React.createElement(
  as,
  props,
  children,
))`${Col}`;

const ColElement = (props: Props) => <Styled {...props} />;

ColElement.defaultProps = {
  as: 'div',
  order: undefined,
  offset: undefined,
  theme: undefined,
};

// $FlowIssues
export default withTheme(ColElement);
