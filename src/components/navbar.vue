<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img class="logo" src="https://png.icons8.com/globe/office/28" width="28" height="28">
          OSM Browser
        </a>
        <a href="https://icons8.com">Icon pack by Icons8</a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <locale-dropdown />

          <a class="navbar-item" href="https://github.com/duxet/osm-browser" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fa fa-lg fa-github"></i>
            </span>
          </a>
        </div>
      </div>
    </nav>
</template>

<script>
import LocaleDropdown from './Navbar/LocaleDropdown'

export default {
  components: {
    'locale-dropdown': LocaleDropdown
  }
}
</script>


<style lang="scss">
  .navbar {
    z-index: 1024 !important;

    .logo {
      margin-right: 10px;
    }
  }
</style>
