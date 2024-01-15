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
        <v-expansion-panel-text class="px-5 pt-2">
          <div v-if="checkFishingSpots(region)">
            <ul
              v-for="neighborhood in sortNeighborhoods(region).neighborhoods"
              :key="neighborhood.name"
              :name="neighborhood.name"
            >
              <li
                v-if="neighborhood.fishability && neighborhood?.fishability > 0"
              >
                <div class="location-row text-body-1 font-weight-medium">
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
          </div>
          <div v-else>
            <p class="text-body-1 font-weight-medium">
              No spots in this region yet.
            </p>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts" setup>
import { florianopolisRegions } from "@/assets/data/locations";
import { FlorianopolisRegion } from "@/types";
const FloripaRegions: FlorianopolisRegion[] = florianopolisRegions;

const sortNeighborhoods = (region: any) => {
  const reorderedNeighborhoods = region.neighborhoods.sort((a: any, b: any) => {
    if (a.fishability > b.fishability) return -1;
    if (a.fishability < b.fishability) return 1;
    return a.name.localeCompare(b.name);
  });
  return { ...region, neighborhoods: reorderedNeighborhoods };
};

const checkFishingSpots = (region: any) => {
  return region.neighborhoods.some((neighborhood: any) => {
    return neighborhood.fishability && neighborhood.fishability > 0;
  });
};

const handleSelectNeighborhood = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const neighborhoodName = target.innerText
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  window.location.href = `${window.location.origin}/spots/by-location/${neighborhoodName}`;
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
