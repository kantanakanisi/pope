<template>
  <div>
    <p>{{ incrementCount }}</p>
    <button type="button" @click="countupAction()">countup</button>
    <button type="button" @click="countdownAction()">countdown</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomeContainer",
  computed: {
    ...mapGetters("count", ["incrementCount"]),
  },
  methods: {
    ...mapActions("count", ["countupAction", "countdownAction"]),
  },
};
</script>

<style scoped>
button {
  margin-left: 20px;
}
</style>
