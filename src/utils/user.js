import { Message } from "element-ui"
export function gotoLogin(loginUrl) {
  Promise.resolve(
    Message({
      type: "success",
      message: "正在跳转到登录页面。。。",
    })
  ).then(() => {
    setTimeout(() => {
      window.open(loginUrl, "_self")
    }, 1000)
  })
}
export function expiredtoLogin(loginUrl) {
  Promise.resolve(
    Message({
      type: "warning",
      message: "登录已过期，请重新登录。。。",
    })
  ).then(() => {
    setTimeout(() => {
      Message({
        type: "success",
        message: "正在跳转到登录页面。。。",
      })
    }, 2000)
    setTimeout(() => {
      window.open(loginUrl, "_self")
    }, 3000)
  })
}