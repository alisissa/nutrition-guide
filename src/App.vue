<template>
  <div id="app">
    <div class="header">
      <div class="header_title">Nutrition Guide</div>
    </div>
    <app-background></app-background>
    <search></search>
    <router-view />
  </div>
</template>

<script>
import AppBackground from "./components/AppBackground";
import Search from "@/components/Search";

export default {
  name: "App",
  components: {
    AppBackground,
    Search
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.header {
  background-image: linear-gradient(-296deg, $primary, $light-green);
  padding: 20px;

  &_title {
    color: $off-white;
    font-size: 32px;
  }
}
</style>
