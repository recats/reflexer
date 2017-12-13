// @flow
import React from 'react';
import { Grid } from './styled';

type Props = {
  children: Node,
  fluid?: boolean,
}

const FlexGrid = ({ children, fluid = false }: Props) => (
  <Grid fluid={fluid}>
    {children}
  </Grid>
);

FlexGrid.defaultProps = {
  fluid: false,
};

export default FlexGrid;
