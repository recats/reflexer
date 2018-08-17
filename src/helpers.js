// @flow
import generateMediaQuery from './generatorMediaQuery';

export const theme = {
  reflexer: {
    gridFluid: '2rem',
    rowGutter: '-0.5rem',
    colGutter: '0.5rem',
    size: {
      xl: 75,
      lg: 64,
      md: 48,
      sm: 30,
      xs: 0,
    },
  },
};

export const propsChecker = (props: Object, entity: string) => (
  props.theme.reflexer ? props.theme.reflexer[entity] : theme.reflexer[entity]
);

export const media = (props: Object) => {
  const sizeMedia = propsChecker(props, 'size');
  return Object.keys(sizeMedia).reduce((accumulator, label) => {
    const accum = accumulator;
    accum[label] = (...args: *) => generateMediaQuery(sizeMedia[label], args);
    return accum;
  }, {});
};


export const checkPercent = (size: number) => `${100 / (12 / size)}%`;

const checkTypeParams = (props: Object, params: Object | string | number): Object => {
  let values = {};
  if (typeof params === 'string' || typeof params === 'number') {
    const firstValue = Object.keys(propsChecker(props, 'size'));
    values = { [firstValue[0]]: params };
  } else if (typeof params === 'object') {
    values = params;
  }
  return values;
};

export const checkWidth = (props: Object, params: Object | number) => {
  const object = checkTypeParams(props, params);

  // $FlowIssues
  return Object.keys(object).map((key) => {
    if (object[key] === 'auto') {
      // $FlowIssues
      return media(props)[key]`
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
      `;
    }

    if (typeof object[key] === 'string') {
      console.warn('value must be a number', object[key]);
    }

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
    return media(props)[key]`
      flex-basis: ${percent};
      max-width: ${percent};
    `;
  });
};

export const mediaProperty = (
  props: Object,
  params: Object | string | number,
  paramsKey: string,
  calculate?: Function,
) => {
  const object = checkTypeParams(props, params);
  // $FlowIssues
  return Object.keys(object).map((key) => {
    if (calculate) {
      return media(props)[key]`
        ${paramsKey}: ${calculate ? calculate(object[key]) : object[key]};
      `;
    }

    return media(props)[key]`
      ${paramsKey}: ${object[key]};
    `;
  });
};
