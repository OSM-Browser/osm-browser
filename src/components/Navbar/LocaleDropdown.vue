<template>
  <b-dropdown position="is-bottom-left">
    <a class="navbar-item" slot="trigger">
      <img :src="getCurrentLocaleIcon()" class="category-icon" width="20" height="20">
    </a>

    <b-dropdown-item has-link>
      <a v-for="locale in locales" @click="changeLocale(locale.code)">
        <img :src="getIcon(locale)" class="category-icon" width="20" height="20">
        {{ locale.name }}
      </a>
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
import Vue from 'vue'

export default {
  data: function () {
    return {
      locales: require('../../../config/i18n').default
    }
  },
  methods: {
    changeLocale: function(locale) {
      this.$i18n.locale = locale
      localStorage.setItem('locale', locale)
    },
    getCurrentLocaleIcon: function() {
      let locale = this.locales.find(l => l.code == this.$i18n.locale)
      return this.getIcon(locale)
    },
    getIcon: function (locale) {
      return `https://png.icons8.com/${ locale.icon }/office/20`
    }
  }
}
</script>
