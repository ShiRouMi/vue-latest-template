import { Loading } from "element-ui"
let loadingInstance, loadingCount = 0

export function startLoading() {
  if (loadingCount === 0) {
    loadingInstance = Loading.service({
      lock: true,
      text: "拼命加载中",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.2)",
      customClass: "custom_loading_class",
    })
  }
  loadingCount++ 
}
export function endLoading() {
  loadingCount--
  if (loadingCount <=0) {
    loadingInstance.close()
  }
}