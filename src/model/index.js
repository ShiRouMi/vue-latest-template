import mapValues from "lodash/mapValues"
import _set from "lodash/set"
import _get from "lodash/get" 
import isNumber from "lodash/isNumber"
import isString from "lodash/isString"
import isArray from "lodash/isArray"
import isDate from "lodash/isDate"
import isBoolean from "lodash/isBoolean"
import isPlainObject from "lodash/isPlainObject"
import isNull from "lodash/isNull"
import _manba from "manba"

/**
 * 格式化价格的单位
 */
const PRICE = {
  S: 10, // 十
  B: 100, // 百
  Q: 1000, // 千
  w: 10000, // 万
}

class Model {
  constructor(options = {}) {
    this._attributes = {
      ...options,
    }
  }
  /**
   * 根据初始定义的模型，解析模型，将后端返回的数据进行变量映射赋值
   * @param {*} data 需要解析的数据
   */
  parse(data = {}) {
    // mapValues 创建一个对象，这个对象的key与object对象相同，值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。
    mapValues(this._attributes, (attribute, key) => {
      let path = attribute.path,
        type = new attribute.type(),
        unit = attribute.unit
      let distValue = _get(data, path) // 根据 object对象的 path 路径获取值。
      // 格式化值（时间格式化，价值格式化）
      if (distValue) {
        distValue = this.compose(distValue, type, unit)
      }
      // 如果返回的对象不包括这个值，那么获取默认值
      let value = distValue || this.getDefaultValue(attribute.value, type)
      this.set(key, value)
    })
    return this
  }
  /**
   *根据初始定义的模型，反向映射数据
   * @param {*} data 需要转化的数据
   */
  traverse(data = {}) {
    if (!data) return this
    let object = {}
    mapValues(this._attributes, (attribute, key) => {
      let path = attribute.path,
        unit = attribute.unit,
        type = new attribute.type(),
        sourceValue = data[key]
      let value
      if (sourceValue) {
        value = this.discompose(sourceValue, unit, key, type)
      } else {
        value = this.getDefaultValue(attribute.value, type)
      }

      _set(object, path, value)
      
    })
    return object
  }
  /**
   *  格式化特殊类型的值，比如时间的格式化，价格的格式化
   * @param {*} distValue 值
   * @param {*} type 类型，比如String,Number
   * @param {*} unit 单位，比如价格
   */
  compose(distValue, type, unit) {
    if (unit) {
      distValue = distValue / PRICE[unit]
    }
    if (isDate(type)) {
      distValue = _manba(parseFloat(distValue)).format("l")
    }
    return distValue
  }
  /**
   * 和compose方法类似，这里是反向转化
   * @param {*} sourceValue
   * @param {*} unit
   * @param {*} key
   * @param {*} type
   */
  discompose(sourceValue, unit, key, type) {
    if (isDate(type)) {
      sourceValue = _manba(sourceValue).time()
    }
    if (unit) {
      sourceValue = sourceValue * PRICE[unit]
    }
    let value = sourceValue || this.get(key)
    return value
  }
  /**
   * 设置属性值
   * @param {*} key
   * @param {*} value
   */
  set(key, value) {
    this[key] = value
  }
  /**
   * 获取属性值
   * @param {*} key
   */
  get(key) {
    return this[key]
  }
  /**
   * 获取默认值
   * @param {*} value
   * @param {*} type
   */
  getDefaultValue(value, type) {
    if (!value) {
      return this.setDefaultValue(type)
    } else {
      return value
    }
  }
  /**
   * 设置默认值
   * @param {*} type
   */
  setDefaultValue(type) {
    let value = ""
    if (isNumber(type)) {
      value = 0
    } else if (isBoolean(type)) {
      value = true
    } else if (isString(type)) {
      value = ""
    } else if (isArray(type)) {
      value = []
    } else if (isDate(type)) {
      value = Date.now()
    } else if (isPlainObject(type)) {
      value = {}
    } else if (isNull(type)) {
      value = null
    }

    return value
  }
}

export default Model
