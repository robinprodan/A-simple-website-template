<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn flat color="light-blue accent-2" v-on="on">
        Add new project
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field
            label="Title"
            v-model="title"
            prepend-icon="mdi-folder"
            :rules="inputRules"
          >
          </v-text-field>
          <v-textarea
            label="Information"
            v-model="content"
            prepend-icon="mdi-pencil"
            :rules="inputRules"
          >
          </v-textarea>

          <v-menu>
            <template v-slot:activator="{ on }">
              <v-text-field
                :rules="inputRules"
                :value="due"
                v-on="on"
                label="Due date"
                prepend-icon="mdi-calendar-blank"
              >
              </v-text-field>
            </template>
            <v-date-picker v-model="due"> </v-date-picker>
          </v-menu>

          <v-btn flat class="light-blue accent-2 mt-3" @click="submit"
            >Add project</v-btn
          >
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        console.log(this.title, this.content);
        this.$emit("projectAdded");
      }
    }
  }
};
</script>
