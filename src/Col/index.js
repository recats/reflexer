// @flow
import React from 'react';
import type { Node } from 'react';

import { Col } from './styled';
import type { FlowMulti } from './types';

type Props = {
  children: Node,
  order?: FlowMulti,
  offset?: FlowMulti,
  basis: FlowMulti,
};

const FlexCol = ({
  children, basis, order, offset,
}: Props) => (
  <Col basis={basis} order={order} offset={offset}>
    {children}
  </Col>
);

FlexCol.defaultProps = {
  order: undefined,
  offset: undefined,
};

export default FlexCol;
