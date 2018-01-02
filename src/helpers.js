// @flow
import { css } from 'styled-components';

export const theme = {
  reflexer: {
    gridFluid: '2rem',
    rowGutter: '-0.5rem',
    colGutter: '0.5rem',
  },
};

export const sizeMedia = {
  xl: 75, lg: 64, md: 48, sm: 30, xs: 0,
};

export const propsChecker = (props: Object, entity: string) => (
  props.theme.reflexer ? props.theme.reflexer[entity] : theme.reflexer[entity]
);

export const media = Object.keys(sizeMedia).reduce((accumulator, label) => {
  const accum = accumulator;
  accum[label] = (...args: *) => css`
    @media (min-width: ${sizeMedia[label]}em) {
      ${css(...args)}
    }
  `;
  return accum;
}, {});


export const checkPercent = (size: number) => `${100 / (12 / size)}%`;

export const checkWidth = (object: Object) => (
  Object.keys(object).map((key) => {
    let $size = object[key] <= 12 ? object[key] : 12;

    if (object[key] > 12) {
      console.warn(`The ->${key}<- must be <= 12 for the <Col /> component`);
    }

    if (key !== undefined && key === 'xs' && !object[key]) {
      console.warn('The `xs` is not specified for the <Col /> component');
      $size = 12;
    }

    const percent = checkPercent($size);

    // $FlowIssues
    return media[key]`
      flex-basis: ${percent};
      max-width: ${percent};
    `;
  })
);

export const mediaProperty = (object: Object, paramsKey: string, calculate?: Function) => (
  Object.keys(object).map((key) => {
    if (key === 'xs') {
      return `${paramsKey}: ${calculate ? calculate(object[key]) : object[key]};`;
    }

    return media[key]`
      ${paramsKey}: ${object[key]};
    `;
  })
);
