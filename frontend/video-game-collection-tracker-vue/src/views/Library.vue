
<template>
  <div>
      <h1>Library</h1>
      <h2>DataTable goes here</h2>
      <DataTableButtonSet/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataTableButtonSet from "../components/DataTableButtonSet.vue";

export default defineComponent({
  name: "Library",
  components: {
    DataTableButtonSet,
  }
});
</script>
