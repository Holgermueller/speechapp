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

      <h4>toxicity rating will appear here...</h4>

      <h4>{{ checkedText }}</h4>
    </v-card-text>

    <v-card-actions>
      <v-btn elevation="0" dark block @click.prevent="turnTextToSpeech">
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
  }),

  computed: {
    checkedText() {
      return this.$store.getters.checkedText;
    },
  },

  methods: {
    checkText() {
      return this.$store.dispatch("checkText", {
        textToCheck: this.textToCheck,
      });
    },

    turnTextToSpeech() {
      // return this.$store.dispatch("textToTalk", {
      //   textToCheck: this.textToCheck,
      // });

      let speech = new SpeechSynthesisUtterance();

      speech.lang = "en";
      speech.text = this.textToCheck;
      window.speechSynthesis.speak(speech);
    },
  },
};
</script>
