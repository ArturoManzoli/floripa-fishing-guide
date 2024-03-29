import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomePage from "../pages/index.vue";
import SpotsPage from "../pages/spots.vue";
import SpotsByLocationPage from "../pages/spots/by-location.vue";
import LocationDetails from "@/components/LocationDetails.vue";
import SpotsByEquipmentPage from "../pages/spots/by-equipment.vue";
import SpotsByBaitPage from "../pages/spots/by-bait.vue";
import SpotsBySpeciesPage from "../pages/spots/by-species.vue";
import SpotsForCastNetPage from "../pages/spots/cast-net.vue";
import CatchesPage from "../pages/catches.vue";
import EquipmentPage from "../pages/equipment.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/spots",
    name: "Spots",
    component: SpotsPage,
  },
  {
    path: "/spots/by-location/:neighborhood",
    name: "Spots By Neighborhood",
    component: LocationDetails,
    props: true,
  },
  {
    path: "/spots/by-location",
    name: "Spots By Location",
    component: SpotsByLocationPage,
  },
  {
    path: "/spots/by-equipment",
    name: "Spots By Equipment",
    component: SpotsByEquipmentPage,
  },
  {
    path: "/spots/by-bait",
    name: "Spots By Bait",
    component: SpotsByBaitPage,
  },
  {
    path: "/spots/by-species",
    name: "Spots By Species",
    component: SpotsBySpeciesPage,
  },
  {
    path: "/spots/cast-net",
    name: "Cast Net Spots",
    component: SpotsForCastNetPage,
  },
  {
    path: "/catches",
    name: "Catches",
    component: CatchesPage,
  },
  {
    path: "/equipment",
    name: "Equipment",
    component: EquipmentPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
