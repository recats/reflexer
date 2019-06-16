import { css, CSSObject } from 'styled-components';
import { isObject } from './methods';

export default (value: string | number | object, args: CSSObject) => {
  const getObj = (data: object) => ({ querie: 'min-width', unit: 'em', ...data });
  // @ts-ignore
  const style = css(...args);

  if (isObject(value)) {
    const obj: any = getObj((value as object));
    return css`@media (${obj.querie}: ${obj.size}${obj.unit}) { ${style} }`;
  } else if (Array.isArray(value)) {
    const query = value.map((e) => {
      const obj: any = getObj(e);
      return `(${obj.querie}: ${obj.size}${obj.unit})`;
    });
    return css`@media ${query.join(' and ')} { ${style} }`;
  } else if (typeof value === 'number') {
    if (value > 0) {
      return css`@media (min-width: ${value}em) { ${style} }`;
    }
    return css`${style}`;
  } else if (typeof value === 'string') {
    return css`@media ${value} { ${style} }`;
  }

  return style;
};
