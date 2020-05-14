<template>
	<highcharts :options="graph"></highcharts>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import { Chart } from 'highcharts-vue';
	
	export type DataType = {
		graph: any;
	}

	@Component ({
		components: {
			highcharts: Chart 
		},
	})
	export default class Graph extends Vue {
		data (): DataType {
			return {
				graph: {
					title: {
						text: '2019年の平均気温'
					},
					subtitle: {
						text: '引用：<a href="http://www.data.jma.go.jp/obd/stats/etrn/view/monthly_s1.php?prec_no=44&block_no=47662&year=2019&month=&day=&view=">気象庁</a>'
					},
					xAxis: {
						categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
						crosshair: true
					},
					yAxis: {
						title: false,
						labels: {
							format: '{value} ℃'
						},
						opposite: false,
					},
					credits: {
						enabled: false
					},
					series: [{
						name: '平均気温',
						type: 'column',
						data: [5.6, 7.2, 10.6, 13.6, 20.0, 21.8, 24.1, 28.4, 25.1, 19.4, 13.1, 8.5],
						marker: {
							enabled: false
						},
					}],
				}
			}
		}
	}
</script>