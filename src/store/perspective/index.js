export default {
  state: {
    checkedText: "",
  },

  mutations: {
    CHECKED_TEXT(state, payload) {
      state.checkedText = payload;
    },
  },

  actions: {
    checkText({ commit }, payload) {
      let textFromDOM = payload.textToCheck;

      commit("CHECKED_TEXT", textFromDOM);
    },
  },

  getters: {
    checkedText(state) {
      return state.checkedText;
    },
  },
};
