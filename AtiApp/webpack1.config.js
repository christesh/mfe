// const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const mf = require("@angular-architects/module-federation/webpack");
// // const path = require("path");
// const share = mf.share;

// // const sharedMappings = new mf.SharedMappings();
// // sharedMappings.register(
// //   path.join(__dirname, 'tsconfig.json'),
// //   [/* mapped paths to share */]);

// module.exports = {
//   output: {
//     uniqueName: "ati",
//     publicPath: "auto"
//   },
//   optimization: {
//     runtimeChunk: false
//   },   
//   plugins: [

//     new ModuleFederationPlugin({
//       name: "ati",
//       library: { type: "var", name: "ati" },
//       filename: "remoteEntry.js",
//       exposes: {
//         './web-components': './src/bootstrap.ts',
//       },

//       shared: share({
//         "@angular/core": { requiredVersion:'auto' }, 
//         "@angular/common": { requiredVersion:'auto' }, 
//         "@angular/router": { requiredVersion:'auto' },
//         "rxjs": { requiredVersion:'auto' }
//       })

//     }),
//     // sharedMappings.getPlugin()
//   ],
// };
const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: "ati",
  library: { type: "var", name: "ati" },
  filename: "remoteEntry.js",
  exposes: {
    './web-components': './src/bootstrap.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});