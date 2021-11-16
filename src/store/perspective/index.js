export default {
  state: {
    checkedText: "",
    textToCheck: "",
  },

  mutations: {
    CHECK_TEXT(state, payload) {
      state.checkedText = payload;
    },
  },

  actions: {
    getTextToCheck({ commit }, payload) {
      let textToCheck = payload.TextToCheck;

      commit("CHECK_TEXT", textToCheck);
    },

    checkText() {},
  },

  getters: {
    checkedText(state) {
      return state.checkedText;
    },
  },
};
