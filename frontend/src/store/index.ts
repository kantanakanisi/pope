import Vue from "vue";
import Vuex from "vuex";
import { count, navigation } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count,
    navigation,
  },
});
