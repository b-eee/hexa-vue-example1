<template>
  <v-snackbar v-model="isShow" top color="error" timeout="-1">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn color="white" text v-bind="attrs" @click="close">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SnackBar",
  computed: {
    ...mapGetters("snackbar", ["message", "show"]),
    isShow: {
      get() {
        return this.show;
      },
      set(val) {
        this.updateShow(val);
      },
    },
  },
  methods: {
    ...mapActions("snackbar", ["updateShow"]),
    ...mapActions("system", ["updateLoading"]),
    close() {
      this.updateShow(false);
      this.updateLoading(false);
    },
  },
};
</script>
