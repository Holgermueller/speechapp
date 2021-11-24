<template>
  <div>
    <v-card-text>
      <v-textarea outlined clearable></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn elevation="0" dark large fab class="talk-button ma"
        ><v-icon> mdi-microphone</v-icon></v-btn
      >
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "SpeechToTextForm",

  data: () => ({}),
};
</script>

<style scoped>
.talk-button {
  margin: auto;
}
</style>
