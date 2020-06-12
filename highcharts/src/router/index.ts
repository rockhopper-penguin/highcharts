import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Graph from "@/components/Graph.vue";

Vue.use(VueRouter);

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
