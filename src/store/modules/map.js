import * as types from '../mutation-types'

const state = {
  latitude: 0.0,
  longitude: 0.0,
  zoom: 10,
}

const getters = {
  center: state => [state.latitude, state.longitude],
  zoom: state => state.zoom,
}

const actions = {
  moveMap ({ commit }, { latitude, longitude, zoom }) {
    commit(types.MOVE_MAP, { latitude, longitude, zoom })
  }
}

const mutations = {
  [types.MOVE_MAP] (state, { latitude, longitude, zoom }) {
    Object.assign(state, { latitude, longitude, zoom })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
