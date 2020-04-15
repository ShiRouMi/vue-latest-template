const path = require("path")
const TerserWebpackPlugin = require("terser-webpack-plugin")
const { resolve } = require("path")
const { DllPlugin } = require("webpack")
const DLL_DIR = resolve(__dirname, ".dll")

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: {
    // 假设需要以下第三方类库
    vue: ["vue"],
    vuex: ["vuex"],
    ELEMENT: ["element-ui"],
    vueRouter: ["vue-router"],
    axios: ["axios"],
    // 如果需要将类库合并，可以这样写， 这样生成一个 vendor 关联表
    // vendor: ['vue', 'vuex']
  },
  output: {
    // 动态链接库输出到 .dll 文件夹下
    path: path.resolve(__dirname, "./.dll"),
    filename: "[name].dll.js",
    // 库全局变量的名字，如何暴露模块
    library: "[name]",
  },
  optimization: {
    minimizer: [
      // 删除类库文件中的log
      new TerserWebpackPlugin({
        sourceMap: true,
        terserOptions: {
          warnings: false,
          compress: {
            drop_debugger: true,
            drop_console: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new DllPlugin({
      //必须和全局变量即library名字相同，否则DllPlugin插件找不到第三方库
      name: "[name]",
      path: path.join(__dirname, DLL_DIR, "[name].manifest.json"),
    }),
  ],
}
