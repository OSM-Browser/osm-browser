import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet'
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import Buefy from 'buefy'

import App from './App'

Vue.use(VueI18n)
Vue.use(VueRouter)
Vue.use(Buefy)

Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)
Vue.component('v-marker-cluster', Vue2LeafletMarkerCluster)

let localeCode = localStorage.getItem('locale')

if (!localeCode) {
  let localeCodes = require('../config/i18n').default.map(l => l.code)
  localeCode = navigator.languages.find(c => localeCodes.includes(c)) || 'en'
}

const i18n = new VueI18n({
  locale: localeCode || 'en',
  messages: {
    'en': require('../config/i18n/en.json'),
    'pl': require('../config/i18n/pl.json')
  }
})

new Vue({
  el: '#app',
  components: {'app': App},
  i18n
})
