<template>
  <div class="App">
    <router-view></router-view>
    <div>
      <router-link to="/home">go Home</router-link>
      <router-link to="/about">go About</router-link>
    </div>
    <div>
      <p>{{ getCount }}</p>
      <button @click="add">add</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getCount"]),
  },
  methods: {
    ...mapActions(["add"]),
  },
  created() {
    console.log("App loaded...");
  },
};
</script>

<style lang="less" scoped>
@import "./assets/styles/index.less";
.App {
  width: 500px;
  height: 500px;
  border: 10px solid green;
}
</style>