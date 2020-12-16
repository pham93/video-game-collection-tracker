<template>
  <div class="p-fluid">
    <div class="p-field">
        <label for="name">Name</label>
        <InputText id="name" type="text" />
    </div>
    <div class="p-field">
        <label for="summary">Summary</label>
        <InputText id="summary" type="text" />
    </div>
    <Dropdown class="drop" v-model="platform" optionlabel="name" placeholder="Select a Platform" />
    <div class="p-field">
        <label for="developer">Developer</label>
        <InputText id="developer" type="text" />
    </div>
    <div class="p-field">
        <label for="publisher">Publisher</label>
        <InputText id="publisher" type="text" />
    </div>
    <Dropdown class="drop" v-model="platform" optionlabel="name" placeholder="owned/wishlist placeholder" />
    <Dropdown class="drop" v-model="rating" optionlabel="name" placeholder="rating" />
    <Dropdown class="drop" v-model="status" optionlabel="name" placeholder="status" />
</div>
</template>
<style></style>

<script lang="ts">
import { defineComponent } from "vue";
    export default defineComponent({
      name: "AddGameForm",
    })
</script>