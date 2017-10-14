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
        <sidebar @category-selected="categoryChanged" />
      </div>

      <div class="column" style="display: flex; flex-direction: column">
        <v-map ref="map" :zoom=13 :center="[47.413220, -1.219482]" @l-moveend="mapMoved">
          <v-tilelayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></v-tilelayer>
          <v-marker v-for="point in points" :key="point.id" :lat-lng="[point.lat, point.lon]" :icon="icon" @l-click="selectedPoint = point"></v-marker>
        </v-map>

        <div v-if="selectedPoint" id="app-point-info">
          <a class="delete is-large is-pulled-right" @click="selectedPoint = null"></a>

          <h1 class="title is-4">{{ selectedPoint.tags.name || '' }}</h1>
          <h2 class="subtitle">{{ selectedPoint.tags['addr:street'] || '' }} {{ selectedPoint.tags['addr:housenumber'] || '' }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import L from 'leaflet'
import AwesomeMarker from 'drmonty-leaflet-awesome-markers'
import LeafletProviders from 'leaflet-providers'
import LocateControl from 'leaflet.locatecontrol'

import OSM from '../services/OSM'
import Sidebar from './Sidebar'

export default {
  components: {
    'sidebar': Sidebar
  },
  data: function () {
    return {
      osm: new OSM(),
      icon: L.AwesomeMarkers.icon({ icon: 'map-marker', 'prefix': 'fa' }),
      filter: null,
      points: [],
      selectedPoint: null
    }
  },
  mounted: function () {
    (new LocateControl({ drawCircle: false })).addTo(this.$refs.map.mapObject)
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
    mapMoved: function() {
      this.loadPoints()
    },
    categoryChanged: function (category) {
      this.points = []
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
    @import "~drmonty-leaflet-awesome-markers/css/leaflet.awesome-markers.css";
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

    #app-point-info {
      height: 200px;
      padding: 20px;
    }

    #app-sidebar {
      resize: horizontal;
      overflow: auto;
    }
</style>
