import Category from 'models/category'

export default class {
  constructor() {
    this.tabs = require('../../config/tabs').default
  }

  getCategoryTabs() {
    return this.tabs
  }
}
