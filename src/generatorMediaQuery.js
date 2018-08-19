/* eslint no-else-return: 0 */
import { css } from 'styled-components';

export default (value, args) => {
  const getObj = data => ({ querie: 'min-width', unit: 'em', ...data });

  const style = css(...args);

  if (typeof value === 'object' && value.constructor === Object) {
    const obj = getObj(value);
    return css`
      @media (${obj.querie}: ${obj.size}${obj.unit}) { ${style} }
    `;
  } else if (Array.isArray(value)) {
    const query = value.map((e) => {
      const obj = getObj(e);
      return `(${obj.querie}: ${obj.size}${obj.unit})`;
    });
    return css`
      @media ${query.join(' and ')} { ${style} }
    `;
  } else if (typeof value === 'number') {
    return css`
      @media (min-width: ${value}em) { ${style} }
    `;
  } else if (typeof value === 'string') {
    return css`
      @media ${value} { ${style} }
    `;
  }

  return style;
};
