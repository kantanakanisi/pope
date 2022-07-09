<template>
  <v-app>
    <NavigationDrawer />
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/templates/NavigationDrawer";
import Header from "./components/templates/Header";

export default {
  name: "App",
  components: {
    NavigationDrawer,
    Header,
  },
};
</script>
