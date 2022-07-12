<template>
  <v-col xs="12" sm="12" md="4" lg="4" xl="2" class="pl-0 pt-0" cols="12">
    <v-card-text>
      <v-card-title
        class="subtitle-2 grey--text text--darken-3 d-flex align-center pl-0 pt-0"
      >
        {{ title }}
      </v-card-title>
      <slot />
    </v-card-text>
  </v-col>
</template>

<script>
export default {
  name: "HorizontalCardItem",
  props: {
    title: String,
  },
};
</script>
