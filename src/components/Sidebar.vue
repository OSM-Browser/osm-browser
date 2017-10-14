<template>
  <aside class="menu" style="padding: 20px">
    <ul class="menu-list">
      <li v-for="category in categories" :key="category.name">
        <a :class="{ 'is-active': selectedCategory && selectedCategory.name == category.name }" @click="selectCategory(category)">
          <img v-if="category.icon" :src="`https://png.icons8.com/${ category.icon }/office/20`" class="category-icon" width="20" height="20">
          {{ category.name }}
        </a>
      </li>
      <!--
      <li>
        <a class="is-active">Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
        </ul>
      </li>
      -->
    </ul>
  </aside>
</template>

<script>
export default {
  data: function () {
    return {
      categories: require('../../config/categories').default,
      selectedCategory: null
    }
  },
  methods: {
    selectCategory: function (category) {
      this.selectedCategory = category
      this.$emit('category-selected', category)
    }
  }
}
</script>

<style>
.category-icon {
  vertical-align: middle;
  margin-right: 10px;
}
</style>
