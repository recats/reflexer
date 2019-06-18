// Type definitions for reflexer v2.602
// Project: https://github.com/stk-dmitry/reflexer
// Definitions by: Strelkov Dmitry <https://github.com/stk-dmitry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6
/// <reference types="react" />
/// <reference types="styled-components" />

import * as React from "react";
import { StyledComponent } from 'styled-components';

type st = string | { [key: string]: string };

export as namespace reflexer;

// ### ROW

type flexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type flexDirection =  'row' | 'row-reverse' | 'column' | 'column-reverse';
type justifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
type alignItems = 'stretch' | 'baseline' | 'center' | 'flex-start' | 'flex-end';
type alignContent = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between';

interface RowProps extends React.Props<Row> {
  as?: StyledComponent<any, any, {}, never>,
  flexWrap?: flexWrap | { [key: string]: flexWrap },
  flexDirection?: flexDirection | { [key: string]: flexDirection },
  justifyContent?: justifyContent | { [key: string]: justifyContent },
  alignItems?: alignItems | { [key: string]: alignItems },
  alignContent?: alignContent | { [key: string]: alignContent },
}

export class Row extends React.Component<RowProps> {}

// ### COL

interface ColProps extends React.Props<Col> {
  as?: StyledComponent<any, any, {}, never>,
  basis?: number | { [key: string]: number },
  order?: number | { [key: string]: number },
  offset?: number | { [key: string]: number },
}

export class Col extends React.Component<ColProps> {}

// ### Grid

interface GridProps extends React.Props<Grid> {
  as?: StyledComponent<any, any, {}, never>,
  fluid?: boolean;
}

export class Grid extends React.Component<GridProps> {}


export function media(props: any, key: string): any;
