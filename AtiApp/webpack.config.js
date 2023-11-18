const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

// const sharedMappings = new mf.SharedMappings();
// sharedMappings.register(
//   path.join(__dirname, 'tsconfig.json'),
//   [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName:"angular4",
    publicPath: "auto",
    scriptType:'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  
  
  plugins: [
    new ModuleFederationPlugin({
     
      name: "angular4",
      library: { type: "var", name: "angular4" },
      filename: "remoteEntry.js",
      exposes: {
        './webcomponents': './src/bootstrap.ts',
        // './webcomponents': './src/app/core/components/header/info/info.component.ts',
      },


      shared: share({
        "@angular/core": { requiredVersion: '16.2.0' },
        "@angular/common": {   requiredVersion: '16.2.0' },
        "@angular/common/http": {   requiredVersion: '16.2.0' },
        "@angular/router": {  requiredVersion: '16.2.0' },
      })

    }
    ),
    
  ],
  
};


// const {
//   shareAll,
//   withModuleFederationPlugin,
// } = require('@angular-architects/module-federation/webpack');


// module.exports = withModuleFederationPlugin({
  
//   name: "atiApp",
//       library: { type: "var", name: "atiApp" },
//       filename: "remoteEntry.js",
//       exposes: {
//         './web-components': './src/bootstrap.ts',
//       },

//   shared: {
//     ...shareAll({
//       singleton: true,
//       strictVersion: true,
//       requiredVersion: 'auto',
//     }),
//   },
// });