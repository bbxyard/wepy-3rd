const path = require('path');
var prod = process.env.NODE_ENV === 'production'

module.exports = {
  wpyExt: '.wpy',
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src/3rd/components')
    },
    modules: ['node_modules']
  },
  eslint: true,
  cliLogs: true,
  compilers: {
    less: {
      compress: true
    },
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'babel-plugin-transform-class-properties',
        'transform-export-extensions',
        'syntax-export-extensions'
      ]
    }
  },
  plugins: {
  },
  appConfig: {
    noPromiseAPI: ['createSelectorQuery']
  }
}

if (prod) {

  module.exports.cliLogs = false;

  delete module.exports.compilers.babel.sourcesMap;
  // 压缩sass
  // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

  // 压缩less
  module.exports.compilers['less'] = {
    compress: true
  }

  // 压缩js
  module.exports.plugins = {
    uglifyjs: {
      filter: /\.js$/,
      config: {
      }
    },
    imagemin: {
      filter: /\.(jpg|png|jpeg)$/,
      config: {
        jpg: {
          quality: 80
        },
        png: {
          quality: 80
        }
      }
    }
  }
}
