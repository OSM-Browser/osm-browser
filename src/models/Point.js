export default class Point {
  constructor(params) {
    Object.assign(this, params)
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
