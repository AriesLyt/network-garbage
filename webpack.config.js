/**
 * @type {import('webpack').Configuration}
 */
const path = requrire('path')

module.exports = {
  resolve: {
    alias: {
      // '@views': path.resolve(__dirname, 'src/views'),
      // '@components': path.resolve(__dirname, 'src/component')
    }
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader', 'css-loader', 'sass-loader'
        ]
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
    ]
  }
}