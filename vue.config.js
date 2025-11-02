const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  // Servir la app bajo /web
  publicPath: '/web/',

  devServer: {
    // SPA fallback: cualquier /web/... devuelve /web/index.html en desarrollo
    historyApiFallback: {
      rewrites: [
        { from: /^\/web(\/.*)?$/, to: '/web/index.html' }
      ]
    },
    proxy: {
      '/alumnos': {
        target: 'https://appservicedojo14-04-2025-dch6g5dwgba0bdcz.eastus2-01.azurewebsites.net',
        changeOrigin: true
      }
    }
  }
})


