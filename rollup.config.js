import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/index.js',
  format: 'cjs',
  exports: 'named',
  moduleName: 'index',
  dest: 'dist/index.js',
  external: ['react'],
  plugins: [
    commonjs({
      include: 'node_modules/**',
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
