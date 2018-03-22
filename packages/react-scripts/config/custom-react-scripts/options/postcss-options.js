const Cssnext = require('postcss-cssnext');

module.exports = {
  ident: 'postcss',
  plugins: () => [
    require('precss'),
    require('postcss-flexbugs-fixes'),
    Cssnext({
      browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9'],
      flexbox: 'no-2009',
    }),
  ],
};
