<template>
  <v-list v-for="item in menuItems" :key="item.title" class="main-menu">
    <v-list-item :to="item.route">
      <div class="menu-item">
        <v-list-item-icon class="menu-icon">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </div>
    </v-list-item>
  </v-list>
</template>
<script setup lang="ts">
const menuItems = [
  { title: "Home", icon: "mdi-home", route: "/" },
  { title: "Fishing Spots", icon: "mdi-map", route: "/spots" },
  { title: "Catches", icon: "mdi-fish", route: "/catches" },
  { title: "Equipment", icon: "mdi-tools", route: "/equipment" },
];
</script>
<style>
.menu-item {
  display: flex;
  align-items: center;
  justify-content: start;
}
.menu-icon {
  margin-left: 5px;
  margin-right: 15px;
}
</style>
