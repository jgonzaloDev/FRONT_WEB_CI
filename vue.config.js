const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  devServer: {
    proxy: {
      '/alumnos': {
        target: 'https://appservicedojo14-04-2025-dch6g5dwgba0bdcz.eastus2-01.azurewebsites.net',
        changeOrigin: true
      }
    }
  }
};
