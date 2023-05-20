const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置devServer
  devServer: {
    port: 8800, // 项目运行的端口号
  }
})
