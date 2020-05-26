export function getStorage(key) {
  if (!key) return false
  let val = localStorage.getItem(key)
  if (val !== "undefined") {
    return JSON.parse(val)
  }
  return false
}

export function setStorage(key, value) {
  if (!key || !value) return false
  value = JSON.stringify(value)
  localStorage.setItem(key, value)
}

export function removeStorage(key) {
  if (!key) return false
  localStorage.removeItem(key)
}

export function clearLocalStorage() {
  localStorage.clear()
}

export function getSession(key) {
  if (!key) return false
  let val = sessionStorage.getItem(key)
  if (val !== "undefined") {
    return JSON.parse(val)
  }
  return false
}

export function setSession(key, value) {
  if (!key || !value) return false
  value = JSON.stringify(value)
  sessionStorage.setItem(key, value)
}

export function removeSession(key) {
  if (!key) return false
  sessionStorage.removeItem(key)
}

export function clearSessionStorage() {
  sessionStorage.clear()
}
