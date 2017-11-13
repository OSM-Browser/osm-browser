<template>
  <aside class="menu" style="padding: 20px">
    <b-tabs v-model="activeTab">
      <b-tab-item v-for="tab in tabs" :label="$t(tab.id)" :key="tab.name">
        <ul class="menu-list">
          <li v-for="category in tab.items" :key="category.filter">
            <a :class="{ 'is-active': isSelected(category) }" @click="selectCategory(category)">
              <img v-if="category.icon" :src="getIcon(category)" class="category-icon" width="20" height="20">
              {{ $t(category.filter) }}
            </a>
          </li>
        </ul>
      </b-tab-item>
    </b-tabs>
  </aside>
</template>

<script>
export default {
  data: function () {
    return {
      activeTab: 0,
      selectedCategory: null,
      tabs: require('../../config/tabs').default
    }
  },
  methods: {
    getIcon: function (category) {
      return `https://png.icons8.com/${ category.icon }/office/20`
    },
    selectCategory: function (category) {
      this.selectedCategory = category
      this.$emit('category-selected', category)
    },
    isSelected: function (category) {
      return this.selectedCategory && this.selectedCategory.filter == category.filter
    }
  }
}
</script>

<style>
.b-tabs .tab-content {
  padding-top: 10px;
}

.category-icon {
  vertical-align: middle;
  margin-right: 10px;
}
</style>
