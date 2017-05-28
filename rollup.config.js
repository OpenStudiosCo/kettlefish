import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/app.js',
  plugins: [
    buble(),
    uglify()
  ],
  dest: 'dist/app.js'
};
