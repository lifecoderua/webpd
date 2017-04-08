module.exports = {
 entry: './src/core.ts',
 output: {
   filename: 'bundle.js',
   path: __dirname + '/dist/'
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       loader: 'ts-loader',
       exclude: /node_modules/,
     },
     {
       enforce: 'pre',
       test: /\.js$/,
       loader: "source-map-loader"
     },
     {
       enforce: 'pre',
       test: /\.tsx?$/,
       use: "source-map-loader"
     }
   ]
 },
 resolve: {
   extensions: [".ts", ".js"]
 },
 devtool: 'inline-source-map'
};