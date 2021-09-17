import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

if (module.hot) {
  module.hot.accept();
}

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
