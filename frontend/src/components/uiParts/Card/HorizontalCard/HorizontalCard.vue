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
      <HorizontalCardItem title="Languages">
        <v-col class="pl-0 pt-0" cols="12">
          <v-select
            :items="items"
            disabled
            label="EN"
            xs-small
            dense
            outlined
          ></v-select>
        </v-col>
      </HorizontalCardItem>

      <v-divider inset vertical />

      <HorizontalCardItem title="Show stats from">
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              class="pl-0 pt-0"
              v-model="date"
              readonly
              v-bind="attrs"
              v-on="on"
            />
          </template>
          <v-date-picker v-model="date" no-title scrollable>
            <v-spacer />
            <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
            <v-btn text color="primary"> > OK </v-btn>
          </v-date-picker>
        </v-menu>
      </HorizontalCardItem>

      <v-divider inset vertical />

      <HorizontalCardItem title="Toggle theme">
        <v-switch
          v-model="flag"
          color="indigo"
          value="indigo"
          class="mt-0"
          disabled
          hide-details
        />
      </HorizontalCardItem>
    </div>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { mapGetters, mapActions } from "vuex";
import { BREAKPOINT } from "../../../../styles";
import { HorizontalCardType } from "../../../../types";
import HorizontalCardItem from "./HorizontalCardItem.vue";

export default Vue.extend({
  name: "HorizontalCard",
  props: {
    card: {
      type: Object as PropType<HorizontalCardType>,
    },
  },
  components: { HorizontalCardItem },
  data() {
    return {
      BREAKPOINT,
      items: ["EN"],
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      flag: true,
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
