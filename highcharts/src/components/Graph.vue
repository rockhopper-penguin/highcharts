<template>
  <div class="graph">
    <div class="buttons">
      <p>
        <button @click="viewGraph()">グラフを表示</button>
      </p>
    </div>
    <div id="graph">グラフが表示されます</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import * as Highcharts from "highcharts";

@Component
export default class Graph extends Vue {
  array: number[] = [];
  categories: string[] = [
    "A", "B", "C", "D"
  ];

  viewGraph() {
    this.array = [];
    for (let i = 0; i < 4; i++) {
      this.array.push(Math.round(Math.random() * 100));
    }
    this.graph();
  }

  graph() {
    Highcharts.chart({
      chart: {
        renderTo: "graph",
        type: "column"
      },
      credits: {
        enabled: false
      },
      title: false as Highcharts.TitleOptions,
      xAxis: {
        categories: this.categories,
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
          type: "column",
          data: this.array
        }
      ]
    });
  }
}
</script>

<style>
</style>
