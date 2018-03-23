const Cssnext = require('postcss-cssnext');

const paths = require('../../../config/paths');
const appPackage = require(paths.appPackageJson);

module.exports = {
  ident: 'postcss',
  plugins: () => [
    require('postcss-flexbugs-fixes'),
    Cssnext({
      browsers: appPackage.browsers || [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9',
      ],
      flexbox: 'no-2009',
    }),
  ],
};
