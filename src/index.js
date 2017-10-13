import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet'
import VueRouter from 'vue-router'
import Buefy from 'buefy'

import App from './components/App'

Vue.use(VueRouter)
Vue.use(Buefy)

Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)

new Vue({
  el: '#app',
  render: h => h(App)
})
