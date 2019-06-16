export const isObject = (object: any) => (
  typeof object === 'object' && object.constructor === Object
);
