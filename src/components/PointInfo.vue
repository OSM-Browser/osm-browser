<template>
  <div class="point-info">
    <a class="delete is-large is-pulled-right" @click="$emit('closed')"></a>

    <h1 class="title is-4">{{ point.tags.name || '' }}</h1>
    <h2 class="subtitle">{{ point.tags['addr:street'] || '' }} {{ point.tags['addr:housenumber'] || '' }}</h2>
  </div>
</template>

<script>
export default {
  props: ['point']
}
</script>

<style lang="scss">
  .point-info {
    height: 200px;
    padding: 20px;
  }
</style>
