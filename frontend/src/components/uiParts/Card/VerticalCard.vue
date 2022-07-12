<template>
  <div style="display: flex; flex-wrap: wrap; width: 100%">
    <v-col
      v-for="card in cards"
      :key="card.title"
      xs="6"
      sm="6"
      md="4"
      lg="4"
      xl="2"
      cols="12"
    >
      <v-card class="mx-auto" elevation="0" outlined>
        <v-card-text class="px-0 py-0">
          <v-card-title
            class="title grey--text text--darken-3 d-flex align-center"
          >
            <v-icon>{{ card.icon }}</v-icon>
            {{ card.title }}
          </v-card-title>
          <v-divider />
          <v-list>
            <v-list-item
              v-for="item in card.data"
              :key="item.title"
              class="d-flex align-start flex-sm-column"
            >
              <p class="font-weight-bold grey--text text--darken-3 mb-0">
                {{ item.title }}
              </p>
              <v-card-actions class="pl-0">
                <v-btn
                  x-small
                  outlined
                  color="teal accent-4"
                  @click="reveal = true"
                >
                  {{ item.buttonText }}
                </v-btn>
              </v-card-actions>
            </v-list-item>
            <slot />
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { VerticalCardType } from "../../../types";

export default {
  name: "VerticalCard",
  props: {
    cards: {
      type: Array as PropType<VerticalCardType[]>,
      require: true,
    },
  },
  data() {
    return {
      reveal: false,
    };
  },
};
</script>
