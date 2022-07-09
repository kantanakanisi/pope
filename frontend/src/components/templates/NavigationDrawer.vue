<template>
  <v-navigation-drawer :value="drawer" app stateless :temporary="width <= 991">
    <v-container>
      <v-list-item>
        <v-list-item-title class="title grey--text text--darken-2">
          Application
        </v-list-item-title>
        <template v-if="width <= 991">
          <v-btn @click="switchDrawerAction" icon>
            <v-icon>{{ mdiChevronLeft }}</v-icon>
          </v-btn>
        </template>
      </v-list-item>
      <v-divider />
      <v-list nav dense>
        <v-list-group
          v-for="nav_list in nav_lists"
          :key="nav_list.name"
          :prepend-icon="nav_list.icon"
          no-action
          :append-icon="nav_list.lists ? mdiChevronDown : ''"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="list in nav_list.lists" :key="list">
            <v-list-item-content>
              <v-list-item-title>{{ list }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-container>
    <template v-slot:append>
      <div>
        <v-btn block>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  mdiChevronLeft,
  mdiChevronDown,
  mdiSpeedometer,
  mdiCogs,
  mdiPalette,
  mdiViewDashboard,
  mdiFunction,
} from "@mdi/js";

export default {
  name: "NavigationDrawer",
  data() {
    return {
      width: window.innerWidth,
      mdiChevronLeft,
      mdiChevronDown,
      nav_lists: [
        {
          name: "Getting Started",
          icon: mdiSpeedometer,
          lists: ["Quick Start", "Pre-made layouts"],
        },
        {
          name: "Customization",
          icon: mdiCogs,
        },
        {
          name: "Styles & animations",
          icon: mdiPalette,
          lists: ["Colors", "Content", "Display"],
        },
        {
          name: "UI Components",
          icon: mdiViewDashboard,
          lists: ["API explorer", "Alerts"],
        },
        {
          name: "Directives",
          icon: mdiFunction,
        },
      ],
    };
  },
  computed: {
    ...mapGetters("navigation", ["drawer"]),
    ...mapGetters("device", ["windowWidth"]),
  },
  methods: {
    ...mapActions("navigation", ["switchDrawerAction"]),
    handleResize: function () {
      this.width = window.innerWidth;
    },
  },
  mounted: function () {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function () {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
