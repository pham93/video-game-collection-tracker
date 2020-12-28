
<template>
  <div>
      <h1>Library</h1>
      <GameDataTable />
      <DataTableButtonSet/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DataTableButtonSet from "../components/DataTableButtonSet.vue";
import GameDataTable from "../components/GameDataTable.vue";

export default defineComponent({
  name: "Library",
  components: {
    DataTableButtonSet,
    GameDataTable,
  }
});
</script>
