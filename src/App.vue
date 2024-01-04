<template>
  <v-app class="app">
    <v-app-bar elevation="1">
      <v-app-bar-nav-icon class="ml-1" @click="drawer = !drawer"
        ><v-icon>mdi-menu</v-icon></v-app-bar-nav-icon
      >
      <v-app-bar-title>Floripa Fishing Guide</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
      <MainMenu />
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import MainMenu from "./components/MainMenu.vue";
import { ref } from "vue";

const drawer = ref(false);
</script>
<style>
.app {
  background-color: #fafafa;
}
</style>
```
