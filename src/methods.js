// @flow
// eslint-disable-next-line
export const isObject = (object: *) => (
  typeof object === 'object' && object.constructor === Object
);
