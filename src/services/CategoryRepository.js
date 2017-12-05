import Category from '../models/Category'

export default class {
  constructor() {
    this.tabs = require('../../config/tabs').default
  }

  getCategoryTabs() {
    return this.tabs
  }
}
