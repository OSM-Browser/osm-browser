export default class Group {
  constructor(params) {
    Object.assign(this, params)
  }

  equals(group) {
    return this.id === group.id
  }
}
