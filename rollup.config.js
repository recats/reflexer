import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default {
  output: {
    name: pkg.name,
    format: 'cjs',
  },
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    json(),
    terser(),
  ],
}
