export default class Category {
  constructor(params) {
    Object.assign(this, params)
  }

  equals(category) {
    return this.filter === category.filter
  }
}
