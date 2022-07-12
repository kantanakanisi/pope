<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col clos="12">
        <slot />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HorizontalGrid",
};
</script>
