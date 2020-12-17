<template>
  <div class="button-set">
    <Button label="Delete Video Game" class="p-button-raised p-button-rounded" />
    <Button label="Add Video Game" class="p-button-raised p-button-rounded" @click="openDialog" />
    <Dialog header="Header" v-model:visible="displayDialog" >
		  <AddGameForm/>
	  </Dialog>
  </div>
</template>
<style></style>

<script lang="ts">
import { defineComponent } from "vue";
    export default defineComponent({
      name: "DataTableButtonSet",
      data() {
        return {
          displayDialog: false
        }
      },
      methods: {
        openDialog() {
          this.displayDialog = true;
        },
      },
    });
</script>
