<template>
    <DataTable :value="games" v-model:selection="selections" sortMode="multiple" dataKey="title">
        <Column selectionMode="multiple" headerStyle="width: 3em"></Column>
        <Column field="title" header="Title" :sortable="true"></Column>
        <Column field="summary" header="Summary" :sortable="true"></Column>
        <Column field="platform" header="Platform" :sortable="true"></Column>
        <Column field="developer" header="Developer" :sortable="true"></Column>
        <Column field="publisher" header="Publisher" :sortable="true"></Column>
        <Column field="owned" header="Owned" :sortable="true"></Column>
        <Column field="rating" header="Rating" :sortable="true"></Column>
        <Column field="progress" header="Status" :sortable="true"></Column>
    </DataTable>
</template>
<style></style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VideoGameService from "../service/VideoGameService";

export default defineComponent({
    name: "GameDataTable",
    setup() {
        const games = ref(null);
        const selections = ref([]);
        const videoGameService = new VideoGameService();
        videoGameService.getVideoGames().then(data => games.value = data.slice(0,9));
        const populateData = () => {
            // add logic
        };
        return {
            games,
            selections,
        };
    },
});
</script>