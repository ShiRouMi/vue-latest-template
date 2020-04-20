import axios from "axios"
import { Message } from "element-ui"
import { startLoading, endLoading } from "./loading"
import { getStorage } from './storage'
import { addPending, removePending } from "./axiosCancel"

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, //api请求的baseURL
  timeout: 5000
})

const CUSTOM_CODE_MAP = {
  SUCCESS: 0,
  ERROR: 1,
}

const HTTP_CODE_MAP = {
  400: "请求错误",
  401: "未授权，请登录", // clear session
  403: "拒绝访问",
  404: "请求地址出错",
  405: "不允许的请求方法",
  408: "请求超时",
  500: "服务未实现",
  502: "网关错误",
  503: "服务不可用",
  504: "网关超时",
}

instance.interceptors.request.use(
  (config) => {
    startLoading()
    removePending(config)
    addPending(config)
    let token = getStorage("TOKEN")
    if (token) {
      config.headers.Authorization = "token " + token
    }
    return config
  },
  (error) => {
    endLoading()
    Message({
      message: `服务器请求失败${error.message}`,
      type: "error",
    })
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    endLoading()
    removePending(response)
    //以下状态可根据业务自定义
    switch (response.data.status) {
      // 响应成功，但是服务器返回失败的状态码
      case CUSTOM_CODE_MAP.ERROR: {
        Message({
          message: response.data.message || "未知错误",
          type: "error"
        });
        return Promise.reject(response);
      }
      case CUSTOM_CODE_MAP.SUCCESS: {
        return response.data;
      }
      default:
        Message({
          message: `未知错误`,
          type: "error"
        });
        console.log("后台返回status错误");
        return Promise.reject(response);
    }
  },
  error => {
    endLoading()
    if (error && error.response) {
      const message = HTTP_CODE_MAP[error.response.status]
      if (message) {
        error.message = message
      }
    }
    Message({
      message: `服务器响应失败,错误信息: ${error.message}`,
      type: "error"
    })
    return Promise.reject(error)
  }
)

export default instance
