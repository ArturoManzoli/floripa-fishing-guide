import { FlorianopolisRegion, Neighborhood } from "@/types";
import { florianopolisRegions } from "../assets/data/locations";

const processLocationName = (locationName: string) => {
  const processedName = locationName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return processedName;
};

export const getLocationData = async (locationName: string) => {
  let locationData: Neighborhood | null = null;
  florianopolisRegions.map((region: FlorianopolisRegion) => {
    region.neighborhoods.map((neighborhood) => {
      if (
        processLocationName(neighborhood.name) === locationName.toLowerCase()
      ) {
        console.log("Found region:", neighborhood);
        locationData = neighborhood;
      }
    });
  });
  return locationData;
};
