<template>
  <v-container>
    <v-data-table :items="catchesDatabase"></v-data-table>

    <v-dialog v-model="dialog" max-width="600px" class="bg-white border">
      <new-catch-form></new-catch-form>
    </v-dialog>
  </v-container>
  <v-btn
    density="default"
    color="primary"
    icon="mdi-plus"
    class="fab elevation-5"
  >
  </v-btn>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NewCatchForm from "@/components/NewCatchForm.vue";
import { catchDatabase } from "@/assets/data/catches";

const catchesDatabase = ref(catchDatabase);
const dialog = ref(false);
</script>
<style scoped>
.fab {
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
}
</style>
```
