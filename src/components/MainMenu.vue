<template>
  <v-list>
    <v-list-item to="/">
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Home</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/spots">
      <v-list-item-icon>
        <v-icon>mdi-map</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Fishing Spots</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/catches">
      <v-list-item-icon>
        <v-icon>mdi-fish</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>Catches</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/equipment">
      <v-list-item-icon>
        <v-icon>mdi-tools</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>equipment</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>
