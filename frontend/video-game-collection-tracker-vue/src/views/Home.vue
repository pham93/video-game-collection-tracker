<template>
  <div class="home">
    <NavBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from '../components/NavBar.vue';

export default defineComponent({
  name: "Home",
  components: {
    NavBar
  },
  setup() {
    // home
  }
});
</script>
