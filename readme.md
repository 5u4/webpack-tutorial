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

## 4. bundle test

Run the command to bundle on development mode.

```bash
$ webpack --mode development
```

<details>

<summary>Example output:</summary>

```
Hash: 5203e04c8d2976e5b59f
Version: webpack 4.10.2
Time: 84ms
Built at: 2018-05-30 22:13:51
    Asset     Size  Chunks             Chunk Names
bundle.js  3.8 KiB    main  [emitted]  main
Entrypoint main = bundle.js
[./src/main.js] 33 bytes {main} [built]
```

</details>

## 5. initialize npm package

Use the command to create [package.json](package.json)

```bash
$ npm init
```

Edit the following to enable bundle command.

```json
"scripts": {
    "dev": "webpack --watch --progress --mode development",
    "build": "webpack --mode production"
}
```

Use the following commands to run dev and build prod.

```bash
$ npm run dev # run dev
```

```bash
$ npm run build # build bundled file
```
