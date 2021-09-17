import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
  count: 0,
};

const mutations = {
  add: (state) => {
    state.count++;
  },
};

const actions = {
  add: ({ commit }) => {
    commit("add");
  },
};

const getters = {
  getCount(state) {
    return state.count;
  },
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

export default store;
