export default class Category {
  constructor(params) {
    Object.assign(this, params)
  }

  equals(group) {
    return this.id === group.id
  }
}
