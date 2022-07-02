const path = require('path');
const CracoAlias = require('craco-alias')
module.exports = {
  webpack: {
    alias: {
      // '@/views': path.join(__dirname, 'src/views'),
      // '@/components': path.join(__dirname, 'src/component'),
    },
  },
  plugins: [
    {
        plugin: CracoAlias,
        options: {
            source: 'tsconfig',
            baseUrl: '.',
            tsConfigPath: "./paths.json"
        }
    }
  ],
  resolve: {
      extensions: ['.js', '.jsx', '.json']
  },
};