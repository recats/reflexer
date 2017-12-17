// @flow
import React from 'react';
import { Grid } from './styled';

type Props = {
  children: Node,
  fluid?: boolean,
}

const FlexGrid = ({ children, fluid = false }: Props) => (
  React.createElement(
    Grid,
    { fluid },
    children,
  )
);

FlexGrid.defaultProps = {
  fluid: false,
};

export default FlexGrid;
