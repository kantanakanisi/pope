<template>
  <v-navigation-drawer :value="drawer" app stateless :temporary="width <= 991">
    <template v-slot:prepend>
      <v-list-item>
        <v-list-item-title class="title grey--text text--darken-2">
          Pope
        </v-list-item-title>
        <v-spacer />
        <template v-if="width <= 991">
          <v-btn @click="switchDrawerAction" icon>
            <v-icon>{{ icon.mdiChevronLeft }}</v-icon>
          </v-btn>
        </template>
      </v-list-item>
    </template>
    <v-divider />
    <v-container>
      <v-list nav dense>
        <template v-for="nav_list in nav_lists">
          <v-list-item
            v-if="!nav_list.lists"
            :to="nav_list.link"
            :key="nav_list.name"
            @click="menuClose"
          >
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{ nav_list.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group
            v-else
            no-action
            :prepend-icon="nav_list.icon"
            :key="nav_list.link"
            v-model="nav_list.active"
            :append-icon="nav_list.lists ? icon.mdiChevronDown : ''"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ nav_list.name }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="list in nav_list.lists"
              :key="list.name"
              :to="list.link"
            >
              <v-list-item-title>
                {{ list.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-container>
    <template v-slot:append>
      <div>
        <v-list>
          <v-list-item>
            <v-btn block outlined color="red"> Logout </v-btn>
          </v-list-item>
        </v-list>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import {
  mdiChevronLeft,
  mdiChevronDown,
  mdiCog,
  mdiBriefcaseArrowLeftRight,
  mdiViewDashboard,
} from "@mdi/js";

export default {
  name: "NavigationDrawer",
  data() {
    return {
      width: window.innerWidth,
      icon: {
        mdiChevronLeft,
        mdiChevronDown,
      },
      nav_lists: [
        {
          name: "Dashboard",
          icon: mdiViewDashboard,
          link: "/dashboard",
        },
        {
          name: "My exchanges",
          icon: mdiBriefcaseArrowLeftRight,
          link: "/exchanges",
        },
        {
          name: "My Settings",
          icon: mdiCog,
          active: false,
          link: "",
          lists: [
            {
              name: "Subscription",
              link: "/settings",
            },
            {
              name: "Security",
              link: "/settings",
            },
            {
              name: "Languages",
              link: "/settings",
            },
            {
              name: "Support",
              link: "/support",
            },
          ],
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
    handleResize() {
      this.width = window.innerWidth;
    },
    menuClose() {
      this.nav_lists.forEach((nav_list) => (nav_list.active = false));
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
