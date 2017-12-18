import * as types from './mutation-types'

export default {
  [types.RECEIVE_POINTS] (state, { points }) {
    state.points = points
  }
}
