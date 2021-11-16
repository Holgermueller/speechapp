<template>
  <div>
    <v-card class="main-card">
      <v-card-title> Text to speech </v-card-title>

      <v-card-text>
        <v-textarea
          v-model="TextToCheck"
          placeholder="Type your message here..."
          outlined
          clearable
        ></v-textarea>

        <h4>toxicity rating will appear here...</h4>

        <h4>{{ checkedText }}</h4>
      </v-card-text>

      <v-card-actions>
        <v-btn elevation="0" dark block> Block </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "MainCard",

  data: () => ({
    TextToCheck: "",
  }),

  computed: {
    checkText() {
      return this.$store.dispatch("getTextToCheck", {
        TextToCheck: this.TextToCheck,
      });
    },

    checkedText() {
      return this.$store.getters.checkedText;
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
