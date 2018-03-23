const mapObject = require('./utils/map-object');

const customizers = {
  babelPlugins: require('./customizers/babel-plugins'),
  babelPresets: require('./customizers/babel-presets'),
  webpackLoaders: require('./customizers/webpack-loaders'),
  webpackPlugins: require('./customizers/webpack-plugins'),
};

module.exports = getCustomConfig = (isDev = true) => {
  var env = env || {};
  const result = mapObject(customizers, group => {
    return mapObject(
      group,
      (customizer, key) => {
        const result = customizer.get(isDev);
        // @remove-on-eject-begin
        const envValue = process.env['REACT_APP_' + key];
        const activeEnvValue = env && envValue && envValue !== 'false';
        result = (activeEnvValue || customizer.default) && result;
        // @remove-on-eject-end
        return result;
      },
      true
    );
  });
  return result;
};
