module.exports = {
    entry: {
        frontend: './leadmanager/frontend/src/index.js',
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/leadmanager/frontend/static/frontend/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  }