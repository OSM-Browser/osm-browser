<template>
  <div>
    <nav id="app-navbar" class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="http://bulma.io">
          <img src="http://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <!-- navbar items -->
        </div>
      </div>
    </nav>

    <div id="app-container" class="columns is-gapless">
      <div id="app-sidebar" class="column is-one-quarter">
        <sidebar @category-selected="updateFilter" />
      </div>

      <div class="column">
        <v-map ref="map" :zoom=13 :center="[47.413220, -1.219482]" @l-moveend="loadPoints">
          <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
          <v-marker v-for="point in points" :key="point.id" :lat-lng="[point.lat, point.lon]"></v-marker>
        </v-map>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import L from 'leaflet'
import LocateControl from 'leaflet.locatecontrol'

import Sidebar from './Sidebar'

export default {
  components: {
    'sidebar': Sidebar
  },
  data: function () {
    return {
      filter: 'amenity=drinking_water',
      points: []
    }
  },
  mounted: function () {
    (new LocateControl({
      drawCircle: false
    })).addTo(this.$refs.map.mapObject)
  },
  methods: {
    loadPoints: function () {
      let bbox = this.$refs.map.mapObject.getBounds()

      bbox = [
        bbox.getSouthWest().lat,
        bbox.getSouthWest().lng,
        bbox.getNorthEast().lat,
        bbox.getNorthEast().lng
      ].join(',')

      let query = `[out:json];node[${ this.filter }](${ bbox });out;`

      let formData = new URLSearchParams()
      formData.append('data', query)

      Axios.post(
        'http://overpass-api.de/api/interpreter',
        formData
      ).then((response) => {
        this.points = response.data.elements
      })
    },
    updateFilter: function (category) {
      this.filter = category.filter
      this.loadPoints()
    }
  }
}
</script>

<style lang="scss">
    @import "~bulma/sass/utilities/_all";

    // Customization goes here

    @import "~bulma";
    @import "~buefy/src/scss/buefy";
    @import "~leaflet/dist/leaflet.css";
    @import "~leaflet.locatecontrol/dist/L.Control.Locate.css";
    @import "~font-awesome/css/font-awesome.css";

    html {
      overflow: hidden;
    }

    #app-navbar {
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }

    #app-container {
      height: 100vh;
      padding-top: 3.25rem;
    }

    #app-sidebar {
      resize: horizontal;
      overflow: auto;
    }
</style>
