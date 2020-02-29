<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="ma-3 text-center">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="loading" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>
                  mdi-message-text
                </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      team: [
        { name: "Robin", role: "web designer", avatar: "/me1.jpg" },
        { name: "Ikhtiar", role: "web developer", avatar: "/me2.jpg" },
        { name: "Sajjad", role: "Graphic designer", avatar: "/me3.jpeg" },
        { name: "Alamin", role: "Wev designer", avatar: "/me4.jpeg" },
        { name: "Rakib", role: "Social media maverick", avatar: "/me5.jpg" }
      ]
    };
  }
};
</script>
