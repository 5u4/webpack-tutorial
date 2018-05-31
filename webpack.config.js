const path = require('path');

module.exports = {
    entry: './src/main.js', /* the main javascript entry */
    output: {
        path: path.resolve(__dirname, 'dist'), /* the bundle output path */
        filename: 'bundle.js' /* the bundled file name */
    }
};
