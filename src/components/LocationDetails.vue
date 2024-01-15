<template>
  <div v-if="locationData" class="locationContent">
    <h2>{{ locationData.name }}</h2>
    <img
      v-if="locationData.picture"
      :src="locationData.picture"
      alt="location picture"
    />
    <div v-if="locationData.info" class="infoBox">
      <p v-for="(value, key) in locationData.info" :key="key">
        <strong>{{ key }}:</strong> {{ value }}
      </p>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { getLocationData } from "@/services";
import { Neighborhood } from "@/types";
const route = useRoute();

const locationData = ref<Neighborhood | null>(null);
// Fetch location data based on the route param
onMounted(async () => {
  const locationName = route.params.neighborhood as string;
  const fetchedLocation: Neighborhood | null = await getLocationData(
    locationName
  );
  locationData.value = fetchedLocation;
});
</script>
<style>
.locationContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
  margin-top: 25px;
}
.infoBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  row-gap: 10px;
  margin-top: 10px;
}
</style>
