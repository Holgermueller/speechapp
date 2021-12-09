export default {
  store: {
    text: "",
    voices: [],
  },

  mutations: {
    SET_MESSAGE(state, payload) {
      state.text = payload;
    },

    SET_VOICES(state, payload) {
      state.voices = payload;
    },
  },

  actions: {
    // getVoices({ commit }) {
    //   if (typeof speechSynthesis === "undefined") {
    //     return;
    //   }

    //   let voiceList = window.speechSynthesis.getVoices();
    //   let voicesArray = [];

    //   console.log(voiceList);

    //   voiceList.map((voice) => {
    //     let voicesForDom = {
    //       name: voice.name,
    //       lang: voice.lang,
    //     };
    //     voicesArray.push(voicesForDom);
    //   });

    //   commit("SET_VOICES", voicesArray);
    // },

    talk({ commit }, payload) {
      let speech = new SpeechSynthesisUtterance();

      speech.lang = "en";
      speech.text = payload.textToCheck;
      speech.voice = payload.voiceToHere;

      commit("SET_MESSAGE", window.speechSynthesis.speak(speech));
    },
  },

  getters: {
    text(state) {
      return state.text;
    },

    voices(state) {
      return state.voices;
    },
  },
};
