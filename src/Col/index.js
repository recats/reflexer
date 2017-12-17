// @flow
import React from 'react';
import type { Node } from 'react';
import { withTheme } from 'styled-components';

import { Col } from './styled';
import type { FlowMulti } from './const';

type Props = {
  children: Node,
  order?: FlowMulti,
  offset?: FlowMulti,
  basis: FlowMulti,
  theme?: Object,
};

const FlexCol = ({
  children, basis, order, offset, theme,
}: Props) => (
  React.createElement(
    Col,
    {
      basis, order, offset, theme,
    },
    children,
  )
);

FlexCol.defaultProps = {
  order: undefined,
  offset: undefined,
  theme: undefined,
};

// $FlowIssues
export default withTheme(FlexCol);
