const path = require('path');
const CracoAlias = require('craco-alias')
const CracoLessPlugin = require('craco-less')

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
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {  },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  devServer: {
    proxy: {
      "/api": {
        // target: "http://baidu.com",
        target: 'http://119.45.242.136:10086',
        // target: 'http://localhost:10086',
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};