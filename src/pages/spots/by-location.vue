<template>
  <h3 class="d-flex justify-center ma-5">Spots by Location</h3>
  <div class="px-8">
    <v-expansion-panels
      multiple
      class="panels"
      v-for="region in FloripaRegions"
      :key="region.name"
    >
      <v-expansion-panel variant="inset" :title="region.name">
        <v-expansion-panel-text class="px-5 py-2">
          <ul>
            <li
              v-for="neighborhood in region.neighborhoods"
              :key="neighborhood.name"
              :name="neighborhood.name"
            >
              <div class="location-row text-h6">
                <div
                  @click="(e) => handleSelectNeighborhood(e)"
                  style="cursor: pointer"
                >
                  {{ neighborhood.name }}
                </div>

                <v-rating
                  v-model="neighborhood.fishability"
                  color="#eaeaea"
                  density="compact"
                  active-color="#444444"
                  empty-icon="mdi-fish"
                  full-icon="mdi-fish"
                  readonly
                  style="cursor: default"
                ></v-rating>
              </div>
            </li>
          </ul>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
import { florianopolisRegions } from "@/assets/data/locations";
import { FlorianopolisRegion } from "@/types";
const FloripaRegions: FlorianopolisRegion = florianopolisRegions;
console.log("🚀 ~ FloripaRegions:", FloripaRegions);

const handleSelectNeighborhood = (e) => {
  console.log(e.target.innerText);
};
</script>

<style>
.panels {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.location-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2px;
}
</style>
