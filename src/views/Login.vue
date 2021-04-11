<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col lg="3" md="3" sm="3" xs="3">
        <v-img
          contain
          src="~@/assets/img/logo.png"
          min-width="180"
          alt="hexabase vue example1"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ValidationObserver v-slot="{ invalid }">
          <v-card class="mx-auto elevation-12" max-width="354">
            <v-card-title>ログイン</v-card-title>
            <v-card-text>
              <v-form>
                <div>
                  <label>メールアドレス</label>
                  <TextFieldWithValidation
                    v-model="email"
                    textId="hexaemail"
                    textType="text"
                    rules="required|email"
                    fieldname="メールアドレス"
                  />
                </div>
                <div>
                  <label>パスワード</label>
                  <TextFieldWithValidation
                    v-model="password"
                    textType="password"
                    rules="required"
                    fieldname="パスワード"
                  />
                </div>
              </v-form>
              <template v-if="errorMessage != ''">
                <div class="red--text">
                  {{ errorMessage }}
                </div>
              </template>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="button-main"
                color="accent"
                @click="login"
                :disabled="invalid"
              >
                ログイン
              </v-btn>
            </v-card-actions>
          </v-card>
        </ValidationObserver>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { ValidationObserver } from "vee-validate";
import TextFieldWithValidation from "@/components/shared/TextFieldWithValidation";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  components: {
    ValidationObserver,
    TextFieldWithValidation,
  },
  methods: {
    ...mapActions("user", ["hexaLogin", "upateUserInfo"]),
    ...mapActions("snackbar", ["updateShow"]),
    ...mapActions("system", ["updateLoading"]),
    login() {
      this.errorMessage = "";
      this.updateLoading(true);

      this.hexaLogin({
        email: this.email,
        password: this.password,
      })
        .then(() => {
          this.upateUserInfo()
            .then(() => {
              this.updateShow(false);
              this.updateLoading(false);
              this.$router.push("/");
            })
            .catch(() => {
              this.errorMessage = "ログインに失敗しました";
              this.updateLoading(false);
            });
        })
        .catch(error => {
          if (
            error.response &&
            error.response.status &&
            error.response.status === 401
          ) {
            this.errorMessage =
              "メールアドレス、またはパスワードが間違っています";
          } else {
            this.errorMessage = "ログインに失敗しました";
          }

          this.updateLoading(false);
        });
    },
  },
};
</script>
