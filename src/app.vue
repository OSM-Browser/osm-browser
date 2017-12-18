<template>
  <div>
    <navbar />

    <div id="app-container" class="columns is-gapless">
      <div id="app-sidebar" class="column is-one-quarter">
        <sidebar @category-selected="categoryChanged" />
      </div>

      <div class="column" style="display: flex; flex-direction: column">
        <map-view />
        <point-info v-if="selectedPoint" :point="selectedPoint" @closed="selectedPoint = null" />
      </div>
    </div>
  </div>
</template>

<script>
import PointRepository from 'services/point_repository'
import Storage from 'services/storage'
import Point from 'models/point'
import PointInfo from 'components/point_info'
import Sidebar from 'components/sidebar'
import Navbar from 'components/navbar'
import MapView from 'components/map'

export default {
  components: {
    'point-info': PointInfo,
    'sidebar': Sidebar,
    'navbar': Navbar,
    'map-view': MapView,
  },
  data: function () {
    return {
      repository: new PointRepository(),
      points: [],
      selectedCategory: null,
      selectedPoint: null,
      location: {
        coordinates: Storage.getObject('location.coordinates', [47.413220, -1.219482]),
        zoom: Storage.getNumber('location.zoom', 13)
      }
    }
  },
  methods: {
    loadPoints: function () {
      if (!this.selectedCategory) {
        return
      }

      let bbox = this.$refs.map.mapObject.getBounds()
      let [type, subtype] = this.selectedCategory.filter.split('=')

      this.repository.getPoints(bbox, type, subtype).then((points) => {
        this.points = points
      })
    },
    mapMoved: function () {
      this.loadPoints()

      let map = this.$refs.map.mapObject
      Storage.set('location.coordinates', [map.getCenter().lat, map.getCenter().lng])
      Storage.set('location.zoom', map.getZoom())

      this.$store.dispatch('moveMap', {
        latitude: map.getCenter().lat,
        longitude: map.getCenter().lng,
        zoom: map.getZoom(),
      })
    },
    categoryChanged: function (category) {
      this.points = []
      this.selectedCategory = category
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
  @import "~leaflet.markercluster/dist/MarkerCluster.css";
  @import "~leaflet.markercluster/dist/MarkerCluster.Default.css";
  @import "~font-awesome/css/font-awesome.css";

  html {
    overflow: hidden;
    padding-top: 3.25rem;
  }

  #app-container {
    height: 100vh;
  }

  #app-sidebar {
    resize: horizontal;
    overflow: auto;
  }
</style>
