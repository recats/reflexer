import { css } from 'styled-components';

export default (value, args) => {
  const getObj = data => ({ media: 'min-width', type: 'rem', ...data });

  const style = css(...args);

  if (typeof value === 'object' && value.constructor === Object) {
    const obj = getObj(value);
    return css`
      @media (${obj.media}: ${obj.value}${obj.type}) { ${style} }
    `;
  } else if (Array.isArray(value)) {
    const query = value.map((e) => {
      const obj = getObj(e);
      return `(${obj.media}: ${obj.value}${obj.type})`;
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
