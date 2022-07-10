<template>
  <v-app-bar color="white" elevation="0" app>
    <v-app-bar-nav-icon @click="switchDrawerAction">
      <v-icon>{{ icon.mdiMenu }}</v-icon>
    </v-app-bar-nav-icon>
    <v-spacer />
    <v-toolbar-items>
      <AvatarDropdown
        :mdiAccountCircle="icon.mdiAccountCircle"
        :items="avatarDropdownItems"
      />
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapActions } from "vuex";
import {
  mdiMenu,
  mdiAccountCircle,
  mdiBriefcaseArrowLeftRight,
  mdiNoteText,
  mdiWallet,
  mdiCog,
  mdiChatQuestionOutline,
} from "@mdi/js";
import AvatarDropdown from "../uiParts/Header/AvatarDropdown";

export default {
  name: "Header",
  components: {
    AvatarDropdown,
  },
  data() {
    return {
      icon: {
        mdiMenu,
        mdiAccountCircle,
      },
      avatarDropdownItems: [
        {
          name: "My exchanges",
          icon: mdiBriefcaseArrowLeftRight,
          link: "/exchanges",
        },
        {
          name: "My portfolios",
          icon: mdiNoteText,
          link: "/portfolios",
        },
        {
          name: "Subscription",
          icon: mdiWallet,
          link: "/subscription",
        },
        {
          name: "Settings",
          icon: mdiCog,
          link: "/settings",
        },
        {
          name: "Feedback",
          icon: mdiChatQuestionOutline,
          link: "/feedback",
        },
      ],
    };
  },
  methods: {
    ...mapActions("navigation", ["switchDrawerAction"]),
  },
};
</script>
