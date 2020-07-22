<template>
  <ValidationProvider v-slot="{ errors }" :rules="rules" :name="fieldname">
    <v-text-field
      :id="textId"
      v-model="innerValue"
      :type="textType"
      :placeholder="fieldname"
    />
    <p v-show="errors.length" class="red--text">
      {{ errors[0] }}
    </p>
  </ValidationProvider>
</template>

<script>
import { ValidationProvider } from "vee-validate";
export default {
  name: "TextFieldWithValidation",
  props: {
    textId: {
      type: String,
      required: false,
    },
    textType: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    fieldname: {
      type: String,
      required: true,
    },
  },
  components: {
    ValidationProvider,
  },
  computed: {
    innerValue: {
      get() {
        return this.$props.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>
