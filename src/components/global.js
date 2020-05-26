import Vue from 'vue'
import upperFirst from "lodash/upperFirst"
import camelCase from "lodash/camelCase"

const requireComponent = require.context(
  ".",
  false,
  /Base[A-Z]\w+\.(vue|js)$/ // 匹配基础组件文件名的正则表达式
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  const componentName = upperFirst(
    camelCase(
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  )

  Vue.component(
    componentName,
    componentConfig.default, componentConfig
  )
})