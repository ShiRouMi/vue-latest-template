import Cookies from "js-cookie"
const COOKIE_KEY = "Cookie_Key"

export const getCookie = (key) => {
  if(key) {
    Cookies.get(key)
  } else {
    Cookies.get(COOKIE_KEY)
  }
}
export const setCookie = (val, key) => {
  if(key) {
    Cookies.set(key, val)
  } else {
    Cookies.set(COOKIE_KEY, val)
  }
}
export const removeCookie = (key) => {
  if(key) {
    Cookies.remove(key)
  } else {
    Cookies.remove(COOKIE_KEY)
  }
}