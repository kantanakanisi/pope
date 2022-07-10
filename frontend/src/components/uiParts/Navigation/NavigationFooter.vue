<template>
  <v-list>
    <v-list-item v-for="list in lists" :key="list.name" :to="list.link">
      <v-list-item-icon>
        <v-icon>{{ list.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ list.name }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script lang="ts">
import { PropType } from "vue";
import type { AvatarDropdownItem } from "../../../types";

export default {
  name: "NavigationFooter",
  props: {
    lists: {
      type: Array as PropType<AvatarDropdownItem[]>,
    },
  },
  data() {
    return {};
  },
};
</script>
