import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const array: number[] = [];
const graphType: any = "line";
const categories: string[] = [
  "A", "B", "C", "D"
];

export default new Vuex.Store({
  state: {
    array,
    graphType,
    categories,
  },
  mutations: {},
  actions: {},
  modules: {}
});