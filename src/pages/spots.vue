<template>
  <v-container fluid class="px-10 py-5 d-flex justify-center spots-container">
    <v-row>
      <v-col cols="12">
        <v-card-title class="text-center">Spots</v-card-title>
        <v-card-text>
          <v-container fluid>
            <v-row>
              <v-col
                v-for="item in menuItems"
                :key="item.title"
                cols="12"
                sm="6"
                md="4"
                lg="3"
                class="d-flex justify-center"
              >
                <v-card
                  class="mx-2 my-2"
                  :to="item.route"
                  width="200px"
                  height="200px"
                >
                  <v-img :src="item.image" height="74%" cover class="border-b">
                  </v-img>
                  <v-card-text
                    class="d-flex justify-center text-body-1 font-weight-medium"
                    >{{ item.title }}</v-card-text
                  >
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import FloripaMap from "../assets/images/floripa_map_small.png";
import ByEquipment from "../assets/images/by_equipment.png";
import BySpecies from "../assets/images/by_species.png";
import ByBait from "../assets/images/by_bait.png";
import WithCastNet from "../assets/images/with_cast_net.png";

const byEquipment = ref(ByEquipment);
const floripaMapImage = ref(FloripaMap);
const bySpecies = ref(BySpecies);
const byBait = ref(ByBait);
const withCastNet = ref(WithCastNet);

const menuItems = [
  {
    title: "By Location",
    image: floripaMapImage.value,
    route: "/spots/by-location",
  },
  {
    title: "By Equipment",
    image: byEquipment.value,
    route: "/spots/by-equipment",
  },
  {
    title: "By Species",
    image: bySpecies.value,
    route: "/spots/by-species",
  },
  {
    title: "By Bait",
    image: byBait.value,
    route: "/spots/by-bait",
  },
  {
    title: "Cast Net Spots",
    image: withCastNet.value,
    route: "/spots/cast-net",
  },
];
</script>
<style scoped>
.spots-container {
  background-color: #fafafa;
}
</style>

```
