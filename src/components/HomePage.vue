<template>
  <v-container>
    <div class="d-flex flex-column mt-10">
      <v-img src="@/assets/logo.png" height="150px" />
    </div>
    <h2 class="text-center mt-5">Floripa Fishing Guide</h2>
    <div class="d-flex flex-row justify-center mt-10">
      <div class="d-flex flex-column text-width">
        <div class="text-justify">
          Welcome to our digital fishing logbook, an application that allow
          anglers to plan and record their fishing trips. It enables users to
          log information about each catch, including species, weight, bait, and
          equipment, as well as environmental conditions like weather and tide.
          The app also offers functionality for uploading images and adding
          notes to each entry.
        </div>
        <br />
        <div class="text-justify">
          In addition to logging catches, the software includes a section for
          fishing spots, categorized by Location, Equipment, Species, and Bait,
          with a specific area for Cast Net Fishing Spots. This feature assists
          in planning fishing activities based on various criteria.
        </div>
        <br />
        <div class="text-justify">
          Furthermore, the application has an equipment section where users can
          list and manage their fishing gear. This section helps in keeping
          track of equipment, preparing for fishing trips. By combining gear
          management with logging and spot categorization, the app aims to
          provide a cohesive tool for organizing fishing activities.
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.text-width {
  width: 80%;
}
</style>
