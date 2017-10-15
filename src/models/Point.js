export default class Point {
  constructor(element) {
    this.id = element.id
    this.type = element.type

    if (element.type == 'way') {
      this.coordinates = [element.center.lat, element.center.lon]
    } else {
      this.coordinates = [element.lat, element.lon]
    }

    this.tags = element.tags
  }
}
