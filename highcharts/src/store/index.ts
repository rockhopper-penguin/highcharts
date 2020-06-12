import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const array: number[] = [];
const graphType: any = "line";
const categories: string[] = [
  "A", "B", "C", "D"
];
const arrays: any[] = [];

export default new Vuex.Store({
  state: {
    array,
    graphType,
    categories,
    arrays
  },
  mutations: {},
  actions: {},
  modules: {}
});