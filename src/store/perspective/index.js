export default {
  state: {
    checkedText: "",
    textToTalk: "",
  },

  mutations: {
    CHECKED_TEXT(state, payload) {
      state.checkedText = payload;
    },

    TEXT_TO_TALK(state, payload) {
      state.textToTalk = payload;
    },
  },

  actions: {
    checkText({ commit }, payload) {
      let textFromDOM = payload.textToCheck;

      commit("CHECKED_TEXT", textFromDOM);
    },

    textToTalk({ commit }, payload) {
      let textFromDOM = payload.textToCheck;

      commit("TEXT_TO_TALK", textFromDOM);
    },
  },

  getters: {
    checkedText(state) {
      return state.checkedText;
    },

    textToTalk(state) {
      return state.textToTalk;
    },
  },
};
