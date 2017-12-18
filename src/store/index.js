import Vue from 'vue'
import Vuex from 'vuex'

import CategoryRepository from 'services/category_repository'
import * as actions from './actions'
import * as getters from './getters'
import map from './modules/map'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  currentCategoryId: null,
  currentPointId: null,
  categories: {},
  points: {}
}

export default new Vuex.Store({
  state,
  getters,
  modules: {
    map
  },
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production',
})
