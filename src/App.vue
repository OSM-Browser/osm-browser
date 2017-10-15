<template>
  <div>
    <navbar />

    <div id="app-container" class="columns is-gapless">
      <div id="app-sidebar" class="column is-one-quarter">
        <sidebar @category-selected="categoryChanged" />
      </div>

      <div class="column" style="display: flex; flex-direction: column">
        <v-map ref="map" :zoom=13 :center="[47.413220, -1.219482]" @l-moveend="mapMoved">
          <v-marker v-for="point in points"
            :key="point.id"
            :lat-lng="[point.lat, point.lon]"
            :icon="getIcon(point)"
            :options="{ title: (point.tags.name || '') }"
            @l-click="selectedPoint = point"
          />
        </v-map>

        <point-info v-if="selectedPoint" :point="selectedPoint" @closed="selectedPoint = null" />
      </div>
    </div>
  </div>
</template>

<script>

import L from 'leaflet'
import AwesomeMarker from 'drmonty-leaflet-awesome-markers'
import LeafletProviders from 'leaflet-providers'
import LocateControl from 'leaflet.locatecontrol'

import OSM from './services/OSM'
import PointInfo from './components/PointInfo'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'

export default {
  components: {
    'point-info': PointInfo,
    'sidebar': Sidebar,
    'navbar': Navbar
  },
  data: function () {
    return {
      osm: new OSM(),
      filter: null,
      points: [],
      selectedPoint: null
    }
  },
  mounted: function () {
    (new LocateControl({ drawCircle: false })).addTo(this.$refs.map.mapObject)
    L.tileLayer.provider('OpenStreetMap').addTo(this.$refs.map.mapObject)
  },
  methods: {
    loadPoints: function () {
      if (!this.filter) {
        return
      }

      let bbox = this.$refs.map.mapObject.getBounds()

      bbox = [
        bbox.getSouthWest().lat,
        bbox.getSouthWest().lng,
        bbox.getNorthEast().lat,
        bbox.getNorthEast().lng
      ].join(',')

      let query = `[out:json];node[${ this.filter }](${ bbox });out;`

      this.osm.runQuery(query).then((response) => {
        this.points = response.data.elements
      })
    },
    mapMoved: function () {
      this.loadPoints()
    },
    categoryChanged: function (category) {
      this.points = []
      this.filter = category.filter
      this.loadPoints()
    },
    getIcon: function (point) {
      return L.AwesomeMarkers.icon({ icon: 'map-marker', 'prefix': 'fa' })
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
  @import "~drmonty-leaflet-awesome-markers/css/leaflet.awesome-markers.css";
  @import "~leaflet.locatecontrol/dist/L.Control.Locate.css";
  @import "~font-awesome/css/font-awesome.css";

  html {
    overflow: hidden;
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
