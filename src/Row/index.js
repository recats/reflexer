// @flow
import React from 'react';
import type { Node } from 'react';
import { withTheme } from 'styled-components';

import { Row } from './styled';
import * as consts from './const';

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
  theme?: Object,
}

const FlexRow = ({
  children, flexDirection, flexWrap, justifyContent, alignItems, alignContent, theme,
}: Props) => (
  React.createElement(
    Row,
    {
      flexDirection, flexWrap, justifyContent, alignItems, alignContent, theme,
    },
    children,
  )
);

FlexRow.defaultProps = {
  theme: undefined,
  flexWrap: { xs: consts.flexWrap.wrap },
  flexDirection: { xs: consts.flexDirection.row },
  justifyContent: { xs: consts.justifyContent.flexStart },
  alignItems: { xs: consts.alignItems.stretch },
  alignContent: { xs: consts.alignContent.stretch },
};

// $FlowIssues
export default withTheme(FlexRow);
