import Vue from "vue";
import Vuex from "vuex";

import Perspective from "./perspective";
import TTS from "./TTS";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Perspective,
    TTS,
  },
});
