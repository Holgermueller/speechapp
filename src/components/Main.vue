<template>
  <div>
    <v-card class="main-card">
      <v-card-title> Text to speech </v-card-title>

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
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MainCard",

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
      console.log("click");
    },
  },
};
</script>

<style scoped>
.main-card {
  width: 75%;
  margin: 7% auto;
}
</style>
