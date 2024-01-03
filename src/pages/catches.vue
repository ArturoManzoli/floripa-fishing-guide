<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-autocomplete
            label="Species"
            v-model="currentCatch.species"
            :items="SpeciesAroundFloripa"
          ></v-autocomplete>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Weight (kg)"
            v-model="currentCatch.weight"
            @input="handleWeightInput"
            :rules="numberRules"
            type="text"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Location"
            v-model="currentCatch.location"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field label="Bait" v-model="currentCatch.bait"></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Equipment"
            v-model="currentCatch.equipment"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Date"
            v-model="currentCatch.date"
            type="date"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Time"
            v-model="currentCatch.time"
            type="time"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Weather"
            v-model="currentCatch.weather"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field label="Tide" v-model="currentCatch.tide"></v-text-field>
        </v-col>

        <v-col cols="12" md="6">
          <v-text-field
            label="Moon Phase"
            v-model="currentCatch.moon"
          ></v-text-field>
        </v-col>

        <!-- If you are handling image uploads -->
        <v-col cols="12" md="6">
          <v-file-input
            label="Image"
            v-model="currentCatch.image"
            accept="image/*"
          ></v-file-input>
        </v-col>

        <v-col cols="12">
          <v-textarea label="Notes" v-model="currentCatch.notes"></v-textarea>
        </v-col>

        <!-- Add more fields as needed -->
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { SpeciesAroundFloripa } from "@/assets/data/fishSpecies";
import { formatDate, formatTime } from "@/helpers";

const now = new Date();
const currentDate = formatDate(now);
const currentTime = formatTime(now);

const valid = ref(false);
const currentCatch = reactive({
  species: "",
  weight: "",
  location: "",
  bait: "",
  equipment: "",
  date: currentDate,
  time: currentTime,
  weather: "",
  tide: "",
  moon: "",
  image: [],
  notes: "",
});

const numberRules = [
  (value: string) => !isNaN(value as any) || "Must be a number",
  (value: string) => /^-?\d*\.?\d*$/.test(value) || "Must be a valid number",
];

const handleWeightInput = (value: string) => {
  const regex = /^-?\d*\.?\d*$/;
  if (regex.test(value) || value === "") {
    currentCatch.weight = value;
  }
};
</script>
