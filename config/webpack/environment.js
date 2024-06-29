const { environment } = require('@rails/webpacker');
const webpack = require('webpack');

environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  Popper: ['popper.js', 'default']
}));

environment.loaders.append('sass', {
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'postcss-loader',
    {
      loader: 'sass-loader',
      options: {
        implementation: require('sass'),
        sassOptions: {
          fiber: false
        }
      }
    }
  ]
});

environment.config.merge({
  node: {
    __dirname: true,
    __filename: true,
    global: true,
  }
});

module.exports = environment;
