<template>
  <v-app-bar color="primary" dark app>
    <v-app-bar-nav-icon @click="switchDrawerAction">
      <v-icon>{{ mdiMenu }}</v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title> App </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn text to="/about">For About</v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" text>
            Support
            <v-icon>
              {{ mdiMenuDown }}
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="support in supports"
            :key="support.name"
            :to="support.link"
          >
            <v-list-item-icon>
              <v-icon>{{ support.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ support.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
import {
  mdiMenu,
  mdiMenuDown,
  mdiHelpCircleOutline,
  mdiBugOutline,
  mdiChatQuestionOutline,
} from "@mdi/js";

export default {
  name: "Header",
  data() {
    return {
      mdiMenu,
      mdiMenuDown,
      supports: [
        {
          name: "Suppourt",
          icon: mdiHelpCircleOutline,
          link: "/suppourt",
        },
        {
          name: "Report a bug",
          icon: mdiBugOutline,
          link: "/bug",
        },
        {
          name: "Contact",
          icon: mdiChatQuestionOutline,
          link: "/contact",
        },
      ],
    };
  },
  methods: {
    ...mapActions("navigation", ["switchDrawerAction"]),
  },
};
</script>
