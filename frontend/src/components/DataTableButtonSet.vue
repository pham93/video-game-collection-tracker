<template>
  <div class="button-set">
    <Button label="Delete Video Game" class="p-button-raised p-button-rounded" @click="handleDelete" />
  </div>
</template>
<style></style>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import videoGameService from "../service/VideoGameService";
import { selectedGameIds, useGetGames } from "../state/gamesState";

export default defineComponent({
  name: "DataTableButtonSet",
  setup() {
    const { games } = useGetGames();
    const handleDelete = () => {
      try {
        videoGameService.deleteVideoGames(selectedGameIds.value);
        games.value = games.value?.filter(e => !selectedGameIds.value.includes(e.uuid))
      } catch (e) {
        console.log(e);
      }
    }
    return {
      handleDelete
    }
  }
});
</script>
