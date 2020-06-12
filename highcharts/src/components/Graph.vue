<template>
  <div class="graph">
    <div class="buttons">
      <p>
        <button @click="viewGraph('column')">縦棒グラフ</button>
      </p>
      <p>
        <button @click="viewGraph('bar')">横棒グラフ</button>
      </p>
      <p>
        <button @click="viewGraph('line')">線グラフ</button>
      </p>
      <p>
        <button @click="viewGraph('pie')">円グラフ</button>
      </p>
    </div>
    <div id="graph">表示したいグラフを選択してください。</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as Highcharts from "highcharts";
import Datas from "@/store/index";

@Component
export default class Graph extends Vue {
  public get Data() {
    return Datas.state;
  }
  viewGraph(graphType: string) {
    this.Data.array = [];
    this.Data.graphType = graphType;
    for (let i = 0; i < 4; i++) {
      this.Data.array.push(Math.round(Math.random() * 100));
    }
    this.graph();
  }

  graph() {
    Highcharts.chart({
      chart: {
        renderTo: "graph",
        type: this.Data.graphType
      },
      credits: {
        enabled: false
      },
      title: false as Highcharts.TitleOptions,
      xAxis: {
        categories: this.Data.categories,
        crosshair: true
      } as Highcharts.XAxisOptions,
      yAxis: {
        title: false,
        labels: {
          format: "{value}"
        },
        opposite: false
      } as Highcharts.YAxisOptions,
      series: [
        {
          name: "test",
          type: this.Data.graphType,
          data: this.Data.array
        }
      ]
    });
  }
}
</script>

<style>
</style>
