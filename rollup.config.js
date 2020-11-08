import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/client/app.js',
  output: {
  	file: 'docs/app.js',
  	format: 'cjs'
  },
  plugins: [
    buble(),
    uglify()
  ]
};
