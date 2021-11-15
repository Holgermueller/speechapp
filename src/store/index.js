import Vue from "vue";
import Vuex from "vuex";

import Perspective from "./perspective";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Perspective,
  },
});
