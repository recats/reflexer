// @flow
import React from 'react';
import type { Node } from 'react';
import { Row } from './styled';


import type {
  FlowFlexWrap, FlowFlexDirection, FlowAlignContent, FlowAlignItems, FlowJustifyContnet,
} from './const';

type Props = {
  flexWrap?: FlowFlexWrap,
  flexDirection?: FlowFlexDirection,
  justifyContent?: FlowJustifyContnet,
  alignItems?: FlowAlignItems,
  alignContent?: FlowAlignContent,
  children: Node,
}

const FlexRow = ({
  children, flexDirection, flexWrap, justifyContent, alignItems, alignContent,
}: Props) => (
  <Row
    flexDirection={flexDirection}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
    alignItems={alignItems}
    alignContent={alignContent}
  >
    {children}
  </Row>
);

FlexRow.defaultProps = {
  flexWrap: undefined,
  flexDirection: undefined,
  justifyContent: undefined,
  alignItems: undefined,
  alignContent: undefined,
};

export default FlexRow;
