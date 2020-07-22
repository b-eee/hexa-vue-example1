<template>
  <v-menu v-model="menu" :close-on-content-click="false">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </template>

    <v-card width="300">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img :src="avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ username }}</v-list-item-title>
            <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AvatarMenu",
  data() {
    return {
      menu: false,
    };
  },
  computed: {
    ...mapGetters("user", ["username", "email", "avatar"]),
  },
  methods: {
    ...mapActions("user", ["hexaLogout"]),
    async logout() {
      await this.hexaLogout();
      this.$router.push({ name: "login" });
    },
  },
};
</script>
