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
              @click.prevent="toggleRecording"
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
    controlDisplayData: [
      {
        icon: "mdi-microphone",
        message: "Recording",
      },
      {
        icon: "mdi-microphone-off",
        message: "Not Recording",
      },
    ],
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
    checkCompat() {
      // window.SpeechRecognition =
      //   window.SpeechRecognition || window.webkitSpeechRecognition;
      // const recognition = new SpeechRecognition();
      // recognition.interimResults = true;
      // if (!recognition) {
      //   this.error =
      //     "Speech recognition not availible on this browser.Please use Chrome or Firefox.";
      // }
      // recognition.addEventListener("result", (e) => {
      //   const transcript = Array.from(e.results)
      //     .map((result) => result[0])
      //     .map((result) => result.transcript)
      //     .join("");
      //   console.log(transcript);
      //});
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
