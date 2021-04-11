<template>
  <div>
    <v-app-bar color="primary" dense dark>
      <v-toolbar-title>hexabase vue example1</v-toolbar-title>
      <v-spacer></v-spacer>
      <AvatarMenu />
    </v-app-bar>
  </div>
</template>

<script>
import AvatarMenu from "@/components/AvatarMenu";
export default {
  name: "Header",
  components: {
    AvatarMenu,
  },
};
</script>
