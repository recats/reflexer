// @flow
export const flexWrap = {
  wrap: 'wrap',
  nowrap: 'nowrap',
  wrapReverse: 'wrap-reverse',
};

export const flexDirection = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
};

export const justifyContent = {
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  center: 'center',
  spaceAround: ' space-around',
  spaceBetween: ' space-between',
};

export const alignItems = {
  stretch: 'stretch',
  baseline: 'baseline',
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
};

export const alignContent = {
  stretch: 'stretch',
  center: 'center',
  flexStart: 'flex-start',
  flexEnd: 'flex-end',
  spaceAround: 'space-around',
  spaceBetween: 'space-between',
};

//
export type FlowFlexWrap = {
  xs: $Keys<typeof flexWrap>,
  sm: $Keys<typeof flexWrap>,
  md: $Keys<typeof flexWrap>,
  lg: $Keys<typeof flexWrap>,
  xl: $Keys<typeof flexWrap>,
};

export type FlowFlexDirection = {
  xs: $Keys<typeof flexDirection>,
  sm: $Keys<typeof flexDirection>,
  md: $Keys<typeof flexDirection>,
  lg: $Keys<typeof flexDirection>,
  xl: $Keys<typeof flexDirection>,
};

export type FlowJustifyContnet = {
  xs: $Keys<typeof justifyContent>,
  sm: $Keys<typeof justifyContent>,
  md: $Keys<typeof justifyContent>,
  lg: $Keys<typeof justifyContent>,
  xl: $Keys<typeof justifyContent>,
};

export type FlowAlignContent = {
  xs: $Keys<typeof alignContent>,
  sm: $Keys<typeof alignContent>,
  md: $Keys<typeof alignContent>,
  lg: $Keys<typeof alignContent>,
  xl: $Keys<typeof alignContent>,
};

export type FlowAlignItems = {
  xs: $Keys<typeof alignItems>,
  sm: $Keys<typeof alignItems>,
  md: $Keys<typeof alignItems>,
  lg: $Keys<typeof alignItems>,
  xl: $Keys<typeof alignItems>,
};
