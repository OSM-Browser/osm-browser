import Axios from 'axios'

export default class OSM {
  constructor() {
    this.client = Axios.create({
      baseURL: 'http://overpass-api.de/api/'
    })
  }

  runQuery(query) {
    let formData = new URLSearchParams()
    formData.append('data', query)

    return this.client.post('interpreter', formData)
  }
}
