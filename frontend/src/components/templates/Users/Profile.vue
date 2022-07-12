<template>
  <div>
    <VerticalGrid>
      <VerticalCard :cards="verticalCards" />
    </VerticalGrid>
    <HorizontalGrid>
      <HorizontalCard :card="horizontalCard"></HorizontalCard>
    </HorizontalGrid>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { VerticalCardType, HorizontalCardType } from "../../../types";
import { HorizontalGrid, VerticalGrid } from "../common/Grid";
import { VerticalCard, HorizontalCard } from "../../uiParts/Card";

export default {
  name: "UsersProfile",
  components: {
    HorizontalGrid,
    VerticalGrid,
    VerticalCard,
    HorizontalCard,
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
};
</script>
