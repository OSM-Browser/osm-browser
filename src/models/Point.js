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

  get name() {
    if (this.tags && this.tags.name) {
      return this.tags.name
    }

    return ''
  }

  get address() {
    let firstLine = [
      this.tags['addr:street'],
      this.tags['addr:housenumber']
    ].join(' ').trim()

    let secondLine = [
      this.tags['addr:postcode'],
      this.tags['addr:city']
    ].join(' ').trim()

    return [firstLine, secondLine]
  }
}
