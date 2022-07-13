<template>
  <div>
    <VerticalGrid>
      <VerticalCard :cards="verticalCards" />
    </VerticalGrid>
    <HorizontalGrid>
      <HorizontalCard :card="horizontalCard">
        <HorizontalCardItem title="Languages">
          <v-col class="pl-0 pt-0" cols="12">
            <v-select
              :items="items"
              disabled
              label="EN"
              xs-small
              dense
              outlined
            />
          </v-col>
        </HorizontalCardItem>

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
              <v-btn text color="primary"> OK </v-btn>
            </v-date-picker>
          </v-menu>
        </HorizontalCardItem>

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
      </HorizontalCard>
    </HorizontalGrid>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { VerticalCardType, HorizontalCardType } from "../../../types";
import { HorizontalGrid, VerticalGrid } from "../common/Grid";
import {
  VerticalCard,
  HorizontalCard,
  HorizontalCardItem,
} from "../../uiParts/Card";

export default {
  name: "UsersProfile",
  components: {
    HorizontalGrid,
    VerticalGrid,
    VerticalCard,
    HorizontalCard,
    HorizontalCardItem,
  },
  props: {
    verticalCards: {
      type: Array as PropType<VerticalCardType[]>,
      require: true,
    },
    horizontalCard: {
      type: Object as PropType<HorizontalCardType>,
      require: true,
    },
  },
  data() {
    return {
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
};
</script>
