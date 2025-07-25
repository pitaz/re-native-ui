import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions: ['.js', '.jsx', '.ts', '.tsx'] }),
    commonjs(),
    typescript({ 
      useTsconfigDeclarationDir: true,
      declaration: true,
      declarationDir: './dist'
    }),
    babel({
      babelHelpers: 'runtime',
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      exclude: /node_modules/
    })
  ],
  external: ['react', 'react-native']
};
