<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img class="logo" src="https://png.icons8.com/globe/office/28" width="28" height="28">
          OSM Browser
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="https://github.com/duxet/osm-browser" target="_blank">
            <span class="icon" style="color: #333;">
              <i class="fa fa-lg fa-github"></i>
            </span>
          </a>

        </div>
      </div>
    </nav>
</template>

<style lang="scss">
  .navbar {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    .logo {
      margin-right: 10px;
    }
  }
</style>
