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

## 3. add webpack entry and html

Create a html file for website entry: [index.html](index.html)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Webpack Tutorial</title>
</head>
<body>
    <script src="./dist/bundle.js"></script>
</body>
</html>
```

Create a javascript file for webpack entry: [src/main.js](src/main.js)

```javascript
console.log('webpack tutorial');
```
