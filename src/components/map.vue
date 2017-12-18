<template>
  <v-map ref="map" :maxZoom=19 :center="center" :zoom="zoom" @l-moveend="mapMoved">
  <v-marker-cluster :options="{ disableClusteringAtZoom: 14 }">
    <v-marker v-for="point in points"
      :key="point.id"
      :lat-lng="point.location"
      :icon="getIcon(point)"
      :options="{ title: point.name }"
      @l-click="selectedPoint = point"
    />
  </v-marker-cluster>
</v-map>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import L from 'leaflet'
import AwesomeMarker from 'drmonty-leaflet-awesome-markers'
import LeafletProviders from 'leaflet-providers'
import LocateControl from 'leaflet.locatecontrol'

export default {
  computed: {
    ...mapGetters([
      'center',
      'zoom',
    ]),
  },
  mounted: function () {
    (new LocateControl({ drawCircle: false })).addTo(this.$refs.map.mapObject)
    L.tileLayer.provider('OpenStreetMap').addTo(this.$refs.map.mapObject)
  },
  methods: {
    mapMoved: function () {
      let map = this.$refs.map.mapObject

      this.$store.dispatch('moveMap', {
        latitude: map.getCenter().lat,
        longitude: map.getCenter().lng,
        zoom: map.getZoom(),
      })
    },
  },
}
</script>
