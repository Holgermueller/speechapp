export default {
  state: {
    checkedText: "",
  },

  mutations: {
    CHECK_TEXT(state, payload) {
      state.checkedText = payload;
    },
  },

  actions: {
    getTextToCheck() {},

    checkText() {},
  },

  getters: {
    checkedText(state) {
      return state.checkedText;
    },
  },
};
