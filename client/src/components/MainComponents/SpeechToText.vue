<template>
  <div>
    <v-card-text>
      <v-textarea outlined clearable></v-textarea>
    </v-card-text>
    <v-card-actions>
      <v-list class="talk-controls" dense>
        <v-list-item>
          <v-list-item-content>
            <v-btn
              id="recordButton"
              elevation="0"
              dark
              large
              fab
              class="talk-button"
              @click.prevent="checkCompat"
              ><v-icon> {{ recordingIcon }}</v-icon></v-btn
            >
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <p id="recordingStatus">
              {{ recordingMessage }}
            </p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "SpeechToTextForm",

  data: () => ({
    runTimeTranscript: "",
    transcript: [],
    lang_: "es-ES",
    recording: false,
  }),

  computed: {
    recordingIcon() {
      if (this.recording) {
        return "mdi-microphone";
      } else {
        return "mdi-microphone-off";
      }
    },

    recordingMessage() {
      if (this.recording) {
        return "Recording";
      } else {
        return "Not Recording";
      }
    },
  },

  methods: {
    checkCompat(e) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;

      const recognition = new SpeechRecognition();

      if (recognition in window) {
        console.log("recog availible");
      } else {
        console.log("not availible: " + e.message);
      }
    },

    toggleRecording() {
      this.recording = !this.recording;
    },
  },
};
</script>

<style scoped>
.talk-controls {
  margin: auto;
}
</style>
