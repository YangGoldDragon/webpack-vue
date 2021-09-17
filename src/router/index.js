// src/router/index.js
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
Vue.use(VueRouter);
export default new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/home",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
