<template>
  <div class="point-info">
    <a class="delete is-large is-pulled-right" @click="$emit('closed')"></a>

    <h1 class="title is-4">{{ point.name }}</h1>

    <p v-if="point.address[0].length > 0">
      <i class="fa fa-home"></i>
      {{ point.address[0] }}
    </p>

    <p v-if="point.phone">
      <i class="fa fa-phone"></i>
      <a :href="'tel:' + point.phone">{{ point.phone }}</a>
    </p>

    <p v-if="point.website">
      <i class="fa fa-external-link"></i>
      <a :href="point.website">{{ point.website }}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: ['point'],
  mounted: function () {
  }
}
</script>

<style lang="scss">
  .point-info {
    height: 200px;
    padding: 20px;

    p i {
      margin-right: 10px;
    }
  }
</style>
