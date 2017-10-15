export default class Point {
  constructor(element) {
    if (element.type == 'way') {
      this.coordinates = [element.center.lat, element.center.lon]
    } else {
      this.coordinates = [element.lat, element.lon]
    }

    this.tags = element.tags
  }
}
