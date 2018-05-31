# Webpack Tutorial

## 1. install packages

```bash
$ npm install webpack webpack-cli
```

**Note:** `webpack-cli` may need sudo permission; add `sudo` at front to grand permission.

## 2. add webpack config file

[webpack.config.js](webpack.config.js)

```javascript
const path = require('path');

module.exports = {
    entry: './src/main.js', /* the main javascript entry */
    output: {
        path: path.resolve(__dirname, 'dist'), /* the bundle output path */
        filename: 'bundle.js' /* the bundled file name */
    }
};
```
