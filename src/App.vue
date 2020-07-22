<template>
  <v-app>
    <Loading />
    <Snackbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Loading from "@/components/shared/Loading";
import Snackbar from "@/components/shared/Snackbar";
export default {
  name: "App",
  components: {
    Loading,
    Snackbar,
  },
  methods: {
    ...mapActions("system", ["updateLoading"]),
    ...mapActions("snackbar", ["updateShow"]),
  },
  created() {
    this.updateShow(false);
    this.updateLoading(false);
  },
};
</script>
