// Type definitions for reflexer
// Project: https://github.com/stk-dmitry/reflexer
// Definitions by: Strelkov Dmitry <https://github.com/stk-dmitry>
/// <reference types="react" />
/// <reference types="styled-components" />

type flexWrap = 'wrap' | 'nowrap' | 'wrap-reverse';
type flexDirection =  'row' | 'row-reverse' | 'column' | 'column-reverse';
type justifyContent = 'flex-start' | 'flex-end' | 'center' | 'space-around' | 'space-between';
type alignItems = 'stretch' | 'baseline' | 'center' | 'flex-start' | 'flex-end';
type alignContent = 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between';

declare module 'reflexer' {
  import * as React from 'react';
  import { StyledComponent } from 'styled-components';

  export interface RowProps extends React.ComponentPropsWithRef<'div'> {
    flexWrap?: flexWrap | { [key: string]: flexWrap },
    flexDirection?: flexDirection | { [key: string]: flexDirection },
    justifyContent?: justifyContent | { [key: string]: justifyContent },
    alignItems?: alignItems | { [key: string]: alignItems },
    alignContent?: alignContent | { [key: string]: alignContent },
  }

  export interface ColProps extends React.ComponentPropsWithRef<'div'> {
    basis?: 'auto' | number | { [key: string]: 'auto' | number },
    order?: 'auto' | number | { [key: string]: 'auto' | number },
    offset?: { float: 'left' | 'right', basis: number | { [key: string]: 'auto' | number } },
  }

  export interface GridProps extends React.ComponentPropsWithRef<'div'> {
    fluid?: boolean,
  }

  export type GridComponent = StyledComponent<'div', any, GridProps>;
  export type RowComponent = StyledComponent<'div', any, RowProps>;
  export type ColComponents = StyledComponent<"div", any, ColProps>;

  export const Grid: GridComponent;
  export const Row: RowComponent;
  export const Col: ColComponents;

  export function media(props: any, key: string): any;
}
