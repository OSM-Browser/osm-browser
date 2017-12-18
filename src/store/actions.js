import * as types from './mutation-types'
import PointRepository from 'services/point_repository'
import { point } from 'leaflet';

const pointRepository = new PointRepository()

export const switchCategory = ({ commit }, payload) => {
  commit(types.SWITCH_CATEGORY, payload)
}

export const switchPoint = ({ commit }, payload) => {
  commit(types.SWITCH_POINT, payload)
}

export const getPoints = ({ commit }, payload) => {
  this.repository.getPoints(payload.bbox, payload.type, payload.subtype).then((points) => {
    commit(types.RECEIVE_POINTS, points)
  })
}
