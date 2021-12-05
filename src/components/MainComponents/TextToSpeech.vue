<template>
  <div>
    <v-card-text>
      <v-textarea
        v-model="textToCheck"
        placeholder="Type your message here..."
        outlined
        clearable
        @input="checkText"
      ></v-textarea>

      <div>
        <v-select
          :items="voices"
          label="Select a voice"
          v-model="voiceToHear"
          return-object
          dense
          outlined
        ></v-select>
      </div>

      <h4>toxicity rating will appear here...</h4>

      <h4>{{ checkedText }}</h4>
    </v-card-text>

    <v-card-actions>
      <v-btn
        elevation="0"
        dark
        block
        @click.prevent="turnTextToSpeech"
        :disabled="!formIsValid"
      >
        Say it out loud!!
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "TextToSpeechForm",

  data: () => ({
    textToCheck: "",
    synth: window.speechSynthesis.onvoiceschanged,
    voiceList: [],
    voiceToHear: 0,
  }),

  computed: {
    formIsValid() {
      return this.textToCheck !== "" || this.textToCheck !== null;
    },

    checkedText() {
      return this.$store.getters.checkedText;
    },

    voices() {
      let voiceList = window.speechSynthesis.getVoices();

      return voiceList.map((voice) => voice.name + " (" + voice.lang + ")");
    },
  },

  methods: {
    checkText() {
      return this.$store.dispatch("checkText", {
        textToCheck: this.textToCheck,
      });
    },

    turnTextToSpeech() {
      console.log(this.voiceToHear);

      this.$store.dispatch("talk", {
        textToCheck: this.textToCheck,
        voiceToHear: this.voices[this.voiceToHear],
      });
    },
  },
};
</script>
