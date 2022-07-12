import Vue from "vue";
import Vuex from "vuex";
import { count, navigation, styles_utils } from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    count,
    navigation,
    styles_utils,
  },
});
