export const points = state => state.points

export const currentPoint = state => {
  return state.currentPointId
    ? state.points[state.currentPointsID]
    : {}
}
