<template>
  <a :class="{ 'is-active': isSelected(category) }" @click="selectCategory(category)">
    <img v-if="category.icon" :src="getIcon(category)" class="category-icon" width="20" height="20">
    {{ $t(category.filter) }}
  </a>
</template>
