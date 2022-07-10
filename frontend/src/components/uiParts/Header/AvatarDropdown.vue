<template>
  <v-menu bottom min-width="200px" rounded offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon x-large v-on="on">
        <v-avatar color="indigo lighten-1">
          <v-icon color="white">
            {{ mdiAccountCircle }}
          </v-icon>
        </v-avatar>
      </v-btn>
    </template>
    <v-list>
      <v-list-item v-for="item in items" :key="item.name" :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-btn block outlined color="red"> Logout </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { PropType } from "vue";
import type { AvatarDropdownItem } from "../../../types";

export default {
  name: "AvatarDropdown",
  props: {
    mdiAccountCircle: String,
    items: {
      type: Array as PropType<AvatarDropdownItem[]>,
    },
  },
};
</script>
