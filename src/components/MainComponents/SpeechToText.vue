<template>
  <div>
    <v-card-text>
      <v-textarea outlined clearable></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-btn elevation="0" dark><v-icon left> mdi-microphone</v-icon></v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "SpeechToTextForm",

  data: () => ({}),
};
</script>
