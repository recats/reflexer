import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import flow from 'rollup-plugin-flow';
import json from 'rollup-plugin-json';

export default {
  output: {
    name: 'reflexer',
    format: 'cjs',
  },
  plugins: [
    json(),
    flow(),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
