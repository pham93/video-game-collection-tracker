<template>
<div>
  <div id="nav">
    <NavBar/>
  </div>
  <router-view />
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from './components/NavBar.vue';

export default defineComponent({
  components: {
    NavBar,
  }
})
</script>

<style>
html {
  font-size: 16px;
  background-color: #121212;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #1e1e1e;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: textSecondaryColor;
}

#nav a.router-link-exact-active {
  color: textSecondaryColor;
}

.button-set Button {
  margin-block: 10px;
  margin-inline: 10px;
}

.p-field {
  margin-block: 15px;
}

.drop {
  margin-block: 15px;
}
</style>
