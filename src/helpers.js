// @flow
import generateMediaQuery from './generatorMediaQuery';
import { RowValues } from './Row/const';

export const theme = {
  reflexer: {
    gridFluid: '2rem',
    rowGutter: '-0.5rem',
    colGutter: '0.5rem',
    column: 12,
    size: {
      xl: 75,
      lg: 64,
      md: 48,
      sm: 30,
      xs: 0,
    },
  },
};

export const isObject = (object: *) => (
  typeof object === 'object' && object.constructor === Object
);

export const propsChecker = (props: Object, entity: string) => {
  const newProps = {
    ...props,
    theme: { ...props.theme, reflexer: { ...theme.reflexer, ...props.theme.reflexer } },
  };
  return newProps.theme.reflexer[entity];
};

export const checkPercent = (props: Object, size: number) => (
  `${100 / (+propsChecker(props, 'column') / size)}%`
);

export const media = (props: Object, key: string) => {
  const sizeMedia = propsChecker(props, 'size');
  const acm = Object.keys(sizeMedia).reduce((accumulator, label) => {
    const accum = accumulator;
    accum[label] = (...args: *) => generateMediaQuery(sizeMedia[label], args);
    return accum;
  }, {});

  if (!Object.prototype.hasOwnProperty.call(sizeMedia, key)) {
    console.error(`in ${JSON.stringify(sizeMedia)} no '${key}'`);
  }

  return acm[key];
};


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
  const countColumn = +propsChecker(props, 'column');
  return (Object.keys(object): any).map((key) => {
    if (object[key] === 'auto') {
      return media(props, key)`
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
      `;
    }

    if (typeof object[key] === 'string') {
      console.warn('value must be a number', object[key]);
    }

    let $size = object[key] <= countColumn ? object[key] : countColumn;

    if (object[key] > countColumn) {
      console.warn(`The ->${key}<- must be <= ${countColumn} for the <Col /> component`);
    }

    if (key !== undefined && key === 'xs' && !object[key]) {
      console.warn('The `xs` is not specified for the <Col /> component');
      $size = countColumn;
    }

    const percent = checkPercent(props, $size);

    return media(props, key)`
      flex-basis: ${percent};
      max-width: ${percent};
    `;
  });
};

export const mediaProperty = (
  props: Object,
  params: Object | string | number,
  paramsKey: string,
  isCheckPercent?: boolean,
) => {
  const object = checkTypeParams(props, params);
  return (Object.keys(object): any).map((key) => {
    if (isCheckPercent) {
      return media(props, key)`
        ${paramsKey}: ${isCheckPercent ? checkPercent(props, object[key]) : object[key]};
      `;
    }

    return media(props, key)`
      ${paramsKey}: ${object[key]};
    `;
  });
};

export const validationProps = (validationObject: Object) => {
  Object.keys(validationObject).forEach((key) => {
    const objectValue = Object.values(RowValues[key] || {});
    const inner = validationObject[key];

    const warning = (value: string) => console.warn(`
@@reflexer.
${value} is not supported.
for ${key} you can use one of these [${objectValue.toString()}].
`);

    if (objectValue.length) {
      if (typeof inner === 'string') {
        if (!objectValue.includes(inner.trim())) {
          return warning(inner);
        }
        return false;
      }
      if (isObject(inner)) {
        return Object.keys(inner).map(innerKey => (
          objectValue.includes(inner[innerKey]) || warning(`${inner[innerKey]} in ${innerKey}`)
        ));
      }
      if (typeof inner !== 'string' || !isObject(inner)) {
        return console.warn(`
@@reflexer.
${typeof inner} - ${inner} is not supported
`);
      }
    }
    return false;
  });
};
