var path = require('path');
var webpack = require('webpack');
 
// module.exports = {
//   entry: 'src/client/main.jsx',
//   output: { path: __dirname, filename: 'bundle.js' },
//   module: {
//     loaders: [
//       {
//         test: /.jsx?$/,
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         resolve: { modulesDirectories: ['node_modules', 'src'], extension: ['', '.js', '.scss'] },

//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   },
// };

var config = {
   entry: './src/client/main.jsx',
  
   output: { path: __dirname, filename: 'bundle.js' },
   
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
        
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;