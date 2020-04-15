const fs = require("fs")
const path = require("path")
const { resolve } = require("path") 
const { DllReferencePlugin } = require("webpack")
// 注意需要添加 HtmlWebpackPlugin
const HtmlWebpackPlugin = require("html-webpack-plugin")

// 给 index.html 注入 dll 生成的链接库
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin")

const DLL_DIR = resolve(__dirname, ".dll")
const IS_PRODUCTION = process.env.NODE_ENV === "production"

// 配置 CDN 地址
const cdn = [
  "https://unpkg.com/vue@2.6.9/dist/vue.min.js",
  "https://unpkg.com/vue-router@3.0.2/dist/vue-router.min.js",
  "https://unpkg.com/vuex@3.1.0/dist/vuex.min.js",
  "https://unpkg.com/element-ui@2.6.1/lib/index.js",
  "https://unpkg.com/axios@0.18.0/dist/axios.min.js",
  "https://unpkg.com/js-cookie@2.2.0/src/js.cookie.js",
]
// 排除的依赖性，属性为引入包的名字，值为对应的全局变量，通常是源码中挂载到 window 下
// const externals = {
//   'vue': "Vue",
//   "vue-router": "VueRouter",
//   'vuex': "Vuex",
//   'axios': "axios",
//   "element-ui": "ELEMENT",
// }
const plugins = [
  // 需要用到 HtmlWebpackPlugin
  new HtmlWebpackPlugin({
    template: "./public/index.html", // ！！！这里必须要指定地址，否则内容区会丢失掉
  })
]
// 通过 readdirSync 分析 .dll 文件夹读取文件名
// 动态注册 AddAssetHtmlWebpackPlugin 和 webpack.DllReferencePlugin

// 参考：Add a DLL file from webpack.DllPlugin ----- https://github.com/SimenB/add-asset-html-webpack-plugin#webpack-config

if (IS_PRODUCTION && fs.existsSync(DLL_DIR)) {
  fs.readdirSync(DLL_DIR).forEach((file) => {
    if (/.*\.dll\.js$/.test(file)) {
      plugins.push(
        new AddAssetHtmlWebpackPlugin({
          filepath: path.resolve(__dirname, DLL_DIR, file),
          outputPath: "js", // 输出路径，相对于默认的输出路径（dist）
          publicPath: "js", // 引入文件路径
        })
      )
    }
    if (/.*\.manifest.json/.test(file)) {
      plugins.push(
        //引入 DllPlugin 插件打包好的动态链接库文件
        new DllReferencePlugin({
          manifest: path.resolve(__dirname, DLL_DIR, file),
        })
      )
    }
  })
}

module.exports = {
  publicPath: "",
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.join(__dirname, "src/"))
      .set("util", path.join(__dirname, "src/util"))
    // 生成环境下才启用 CDN，开发模式下还是使用 node_modules
    if (IS_PRODUCTION) {
      config.plugin("html").tap((args) => {
        args[0].cdn = cdn
        return args
      })
      // config.externals(externals)
    }
  },
  configureWebpack: {
    plugins
  }
}
