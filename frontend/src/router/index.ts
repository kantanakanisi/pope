import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import AboutContainer from "@/components/pages/About/AboutContainer.vue";
import HomeContainer from "@/components/pages/Home/HomeContainer.vue";
import { ProfileContainer } from "@/components/pages/Users";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeContainer,
  },
  {
    path: "/users/profile",
    name: "users_profile",
    component: ProfileContainer,
  },
  {
    path: "/about",
    name: "about",
    component: AboutContainer,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
