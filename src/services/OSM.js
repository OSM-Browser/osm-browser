import Axios from 'axios'

export default class OSM {
  constructor() {
    this.client = Axios.create({
      baseURL: 'https://overpass.kumi.systems/api/'
    })
  }

  runQuery(query) {
    let formData = new URLSearchParams()
    formData.append('data', query)

    return this.client.post('interpreter', formData)
  }
}
