import generateMediaQuery from './generatorMediaQuery';
import { IEntityProps, IParamsValue, IProps } from './types';

import pck from '../package.json';

const lib = `--${pck.name}@${pck.version}`;

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

export const propsChecker = (props: IProps, entity: IEntityProps) => {
  const newProps = {
    ...props,
    theme: {
      ...props.theme,
      reflexer: { ...theme.reflexer, ...props.theme.reflexer },
    },
  };
  // @ts-ignore
  return newProps.theme.reflexer[entity];
};

const getMediSize = (props: IProps) => ({ xs: 0, ...propsChecker(props, 'size') });

export const checkPercent = (props: IProps, size: number) => (
  `${100 / (+propsChecker(props, 'column') / size)}%`
);

export const media = (props: IProps, key: string) => {
  const sizeMedia = getMediSize(props);
  const acm = Object.keys(sizeMedia).reduce((accumulator, label) => {
    const accum: any = accumulator;
    accum[label] = (...args: any) => generateMediaQuery(sizeMedia[label], args);
    return accum;
  }, {});

  if (!Object.prototype.hasOwnProperty.call(sizeMedia, key)) {
    console.error(`${lib} in ${JSON.stringify(sizeMedia)} no '${key}'`);
  }

  return acm[key];
};

const checkTypeParams = (props: IProps, params: IParamsValue): object => {
  let values = {};
  if (typeof params === 'string' || typeof params === 'number') {
    values = { xs: params };
  } else if (typeof params === 'object') {
    values = params;
  }
  return values;
};

export const checkWidth = (props: IProps, params: IParamsValue) => {
  const object: any = checkTypeParams(props, params);
  const countColumn = +propsChecker(props, 'column');
  return Object.keys(object).map((key) => {
    if (object[key] === 'auto') {
      return media(props, key)`
        flex-grow: 1;
        flex-basis: 0;
        max-width: 100%;
      `;
    }

    if (typeof object[key] === 'string') {
      console.warn(`${lib} value must be a number`, object[key]);
    }

    let $size = object[key] <= countColumn ? object[key] : countColumn;

    if (object[key] > countColumn) {
      console.warn(`${lib} The ->${key}<- must be <= ${countColumn} for the <Col /> component`);
    }

    if (key !== undefined && key === 'xs' && !object[key]) {
      console.warn(`${lib} The 'xs' is not specified for the <Col /> component`);
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
  props: IProps,
  params: IParamsValue,
  paramsKey: string,
  isCheckPercent?: boolean,
) => {
  const object: any = checkTypeParams(props, params);
  return Object.keys(object).map((key) => {
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
