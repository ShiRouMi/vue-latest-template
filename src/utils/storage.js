export function getStorage(key) {
  if (!key) return false
  return JSON.parse(localStorage.getItem(key))
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

export function getSession(key) {
  if (!key) return false
  return JSON.parse(sessionStorage.getItem(key))
}

export function setSession(key, value) {
  if (!key || !value) return false
  if (typeof value !== "string") {
    value = JSON.stringify(value)
  }
  sessionStorage.setItem(key, value)
}

export function removeSession(key) {
  if (!key) return false
  sessionStorage.removeItem(key)
}
