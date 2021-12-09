<template>
  <div>
    <v-card class="main-tabs" width="600">
      <v-tabs v-model="tab" fixed-tabs>
        <v-tab v-for="(form, index) in forms" :key="index">
          <h2>
            <v-icon left>
              {{ form.icon }}
            </v-icon>
            {{ form.formName }}
          </h2>
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(form, index) in forms" :key="index">
          <v-card elevation="0">
            <v-card-text>
              <div v-if="form.formName === 'Text to Speech'">
                <TextToSpeechForm />
              </div>
              <div v-else>
                <SpeechToTextForm />
              </div>
            </v-card-text>
            <v-card-actions>
              <p class="copy">&copy; 2021 Holger Mueller</p>
            </v-card-actions>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import TextToSpeechForm from "./TextToSpeech.vue";
import SpeechToTextForm from "./SpeechToText.vue";

export default {
  name: "MainTabs",

  components: {
    TextToSpeechForm,
    SpeechToTextForm,
  },

  data: () => ({
    tab: null,
    forms: [
      {
        formName: "Text to Speech",

        icon: "mdi mdi-pen",
      },
      {
        formName: "Speech to Text",

        icon: "mdi mdi-microphone",
      },
    ],
  }),
};
</script>

<style scoped>
.main-tabs {
  margin: 9% auto;
}

.copy {
  text-align: center;
  margin: auto;
}
</style>
