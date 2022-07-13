<template>
  <v-card class="mx-auto" elevation="0" outlined>
    <v-card-text class="px-0 py-0">
      <v-card-title class="title grey--text text--darken-3 d-flex align-center">
        <v-icon>{{ card.icon }}</v-icon>
        {{ card.title }}
      </v-card-title>
      <v-divider />
    </v-card-text>

    <div
      :style="windowWidth > BREAKPOINT.SM ? 'display: flex; width: 100%' : ''"
    >
      <slot />
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { mapGetters, mapActions } from "vuex";
import { HorizontalCardType } from "../../../../types";
import { BREAKPOINT } from "../../../../styles";

export default Vue.extend({
  name: "HorizontalCard",
  props: {
    card: {
      type: Object as PropType<HorizontalCardType>,
    },
  },
  data() {
    return {
      BREAKPOINT,
    };
  },
  computed: {
    ...mapGetters("styles_utils", ["windowWidth"]),
  },
  methods: {
    ...mapActions("styles_utils", ["handleResizeAction"]),
  },
  mounted() {
    window.addEventListener("resize", this.handleResizeAction);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResizeAction);
  },
});
</script>
