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
      categories: [
        { name: 'Parkingi', icon: 'parking', filter: 'amenity=parking' },
        { name: 'Świątynie', icon: 'cathedral', filter: 'amenity=place_of_worship' },
        { name: 'Szkoły', icon: 'school', filter: 'amenity=school' },
        { name: 'Ławki', icon: 'bench', filter: 'amenity=bench' },
        { name: 'Restauracje', icon: 'restaurant', filter: 'amenity=restaurant' },
        { name: 'Stacje benzynowe', icon: 'gas-station', filter: 'amenity=fuel' },
        { name: 'Kawiarnie', icon: 'cafe', filter: 'amenity=cafe' },
        { name: 'Fast foody', icon: 'hamburger', filter: 'amenity=fast_food' },
        { name: 'Banki', icon: 'bank', filter: 'amenity=bank' },
        { name: 'Skrzynki pocztowe', icon: 'post-box', filter: 'amenity=post_box' },
        { name: 'Kosze na śmieci', icon: 'waste', filter: 'amenity=waste_basket' },
        { name: 'Apteki', icon: 'pill', filter: 'amenity=pharmacy' },
        { name: 'Parking rowerowy', icon: 'bicycle', filter: 'amenity=bicycle_parking' },
        { name: 'Toalety', icon: 'toilet', filter: 'amenity=toilets' }
      ],
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
