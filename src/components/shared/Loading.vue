<template>
  <div v-show="loading">
    <v-overlay>
      <v-progress-circular indeterminate color="primary" />
    </v-overlay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Loading",
  computed: {
    ...mapGetters("system", ["loading"]),
  },
};
</script>
