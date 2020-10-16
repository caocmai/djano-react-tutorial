module.exports = {
    entry: {
        frontend: './leadmanager/frontend/src/index.js',
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/home'
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