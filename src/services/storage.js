export default class {
  static get(key, defaultValue = undefined) {
    return localStorage.getItem(key) || defaultValue
  }

  static getNumber(key, defaultValue = undefined) {
    let value = this.get(key)
    return (value !== undefined && new Number(value)) || defaultValue
  }

  static getObject(key, defaultValue = undefined) {
    let value = this.get(key)
    return (value && JSON.parse(value)) || defaultValue
  }

  static set (key, value) {
    if (typeof value === 'object') {
      value = JSON.stringify(value)
    }

    localStorage.setItem(key, value)
  }
}
