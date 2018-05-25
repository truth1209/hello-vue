'use strict'
const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "dist") // since we use CopyWebpackPlugin.
    }
}
