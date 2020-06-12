import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Graph from "@/components/Graph.vue";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Graph",
    component: Graph
  }
];

const router = new VueRouter({
  routes
});

export default router;
