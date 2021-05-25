<template>
  <b-col :cols="defaultCol" :md="mdCol">
    <statistics
      v-if="graphType === 'statistics'"
      :data="statisticsItems"
      title="Customer counts"
    />
    <line-area-chart
      v-else-if="graphType === 'line-area-chart'"
      title="Apex Line Area Chart"
      :data="lineAreaChart"
      :range-picker="rangePicker"
    />
    <scatter-chart
      v-else-if="graphType === 'scatter-chart'"
      title="Apex Scatter Chart"
      :data="scatterChart"
    />
    <line-chart
      v-else-if="graphType === 'line-chart'"
      title="Apex Line Chart"
      subtitle="Apex Line Chart"
      balance="100"
      change="10"
      :data="lineChart"
    />
    <bar-chart
      v-else-if="graphType === 'scatter-chart'"
      title="Apex Bar Chart"
      subtitle="Apex Bar Chart"
      :data="barChart"
      :range-picker="rangePicker"
    />
    <radial-bar-chart
      v-else-if="graphType === 'scatter-chart'"
      title="Apex Radial Bar Chart"
      :data="radialBarChart"
    />
    <donut-chart
      v-else-if="graphType === 'scatter-chart'"
      title="Apex Donut Chart"
      subtitle="Apex Donut Chart"
      :data="donutChart"
    />
    <echart-line
      v-else-if="graphType === 'scatter-chart'"
      title="Echart Line"
      subtitle="Echart Line"
      balance="100"
      change="10"
      :data="echartLine"
    />
    <echart-stacked-area
      v-else-if="graphType === 'scatter-chart'"
      title="Echart Stacked Area"
      :data="echartStackedArea"
    />
    <echart-area
      v-else-if="graphType === 'scatter-chart'"
      title="Echart Area"
      :data="echartArea"
    />
  </b-col>
</template>

<script>
import Statistics from '@/views/sharedcomponents/Statistics.vue'
import LineAreaChart from '@/views/sharedcomponents/LineAreaChart.vue'
import ScatterChart from '@/views/sharedcomponents/ScatterChart.vue'
import LineChart from '@/views/sharedcomponents/LineChart.vue'
import BarChart from '@/views/sharedcomponents/BarChart.vue'
import RadialBarChart from '@/views/sharedcomponents/RadialBarChart.vue'
import DonutChart from '@/views/sharedcomponents/DonutChart.vue'
import EchartLine from '@/views/sharedcomponents/EchartLine.vue'
import EchartStackedArea from '@/views/sharedcomponents/EchartStackedArea.vue'
import EchartArea from '@/views/sharedcomponents/EchartArea.vue'
import { BCol } from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'

const chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff',
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f',
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1',
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7',
  },
}

export default {
  components: {
    Statistics,
    LineAreaChart,
    ScatterChart,
    LineChart,
    BarChart,
    RadialBarChart,
    DonutChart,
    EchartLine,
    EchartStackedArea,
    EchartArea,
    BCol,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  computed: {
    defaultCol() {
      return this.item.col.default
    },
    mdCol() {
      return this.item.col.md
    },
    graphType() {
      return this.item.type
    },
    echartArea() {
      return {
        option: {
          xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
          series: [
            {
              name: 'Point One',
              type: 'line',
              stack: 'Total',
              areaStyle: {
                color: '#84d0ff',
              },
              color: '#84d0ff',
              showSymbol: false,
              smooth: 0.4,
              lineStyle: {
                width: 0,
              },
              data: [120, 432, 281, 434, 590, 330, 210, 150, 110, 150, 420, 650, 560, 250],
            },
            {
              name: 'Point Two',
              type: 'line',
              stack: 'Total',
              areaStyle: {
                color: '#299aff',
              },
              color: '#299aff',
              showSymbol: false,
              smooth: 0.4,
              lineStyle: {
                width: 0,
              },
              data: [20, 32, 281, 634, 490, 430, 310, 450, 900, 1250, 1180, 750, 560, 550],
            },
            {
              name: 'Point Three',
              type: 'line',
              stack: 'Total',
              areaStyle: {
                color: '#eef1f4',
              },
              color: '#eef1f4',
              showSymbol: false,
              smooth: 0.4,
              lineStyle: {
                width: 0,
              },
              data: [120, 132, 981, 134, 100, 80, 410, 550, 50, 0, 0, 0, 80, 550],
            },
          ],
        },
      }
    },
    echartStackedArea() {
      return {
        option: {
          xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
          series: [
            {
              name: 'Point One',
              type: 'line',
              stack: 'Total',
              areaStyle: {},
              showSymbol: false,
              lineStyle: {
                width: 0,
              },
              data: [220, 332, 281, 334, 290, 430, 310, 350, 510, 550, 720, 650, 760, 850],
            },
            {
              name: 'Point Two',
              type: 'line',
              stack: 'Total',
              showSymbol: false,
              areaStyle: {},
              lineStyle: {
                width: 0,
              },
              data: [220, 282, 191, 534, 290, 430, 350, 300, 580, 463, 380, 600, 560, 840],
            },
            {
              name: 'Point Three',
              type: 'line',
              stack: 'Total',
              showSymbol: false,
              areaStyle: {},
              lineStyle: {
                width: 0,
              },
              data: [750, 232, 601, 154, 390, 330, 410, 510, 420, 320, 580, 690, 650, 800],
            },
          ],
        },
      }
    },
    echartLine() {
      return {
        option: {
          xAxisData: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12', '18/12', '19/12', '20/12'],
          series: ['290', '200', '210', '190', '250', '220', '80', '90', '200', '150', '160', '100', '140', '100', '30'],
        },
      }
    },
    donutChart() {
      return {
        series: [85, 16, 50, 50],
        chartOptions: {
          legend: {
            show: true,
            position: 'bottom',
            fontSize: '14px',
            fontFamily: 'Montserrat',
          },
          colors: [
            chartColors.donut.series1,
            chartColors.donut.series5,
            chartColors.donut.series3,
            chartColors.donut.series2,
          ],
          dataLabels: {
            enabled: true,
            formatter(val) {
            // eslint-disable-next-line radix
              return `${parseInt(val)}%`
            },
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '2rem',
                    fontFamily: 'Montserrat',
                  },
                  value: {
                    fontSize: '1rem',
                    fontFamily: 'Montserrat',
                    formatter(val) {
                      // eslint-disable-next-line radix
                      return `${parseInt(val)}%`
                    },
                  },
                  total: {
                    show: true,
                    fontSize: '1.5rem',
                    label: 'Operational',
                    formatter() {
                      return '31%'
                    },
                  },
                },
              },
            },
          },
          labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
          responsive: [
            {
              breakpoint: 992,
              options: {
                chart: {
                  height: 380,
                },
                legend: {
                  position: 'bottom',
                },
              },
            },
            {
              breakpoint: 576,
              options: {
                chart: {
                  height: 320,
                },
                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        show: true,
                        name: {
                          fontSize: '1.5rem',
                        },
                        value: {
                          fontSize: '1rem',
                        },
                        total: {
                          fontSize: '1.5rem',
                        },
                      },
                    },
                  },
                },
                legend: {
                  show: true,
                },
              },
            },
          ],
        },
      }
    },
    radialBarChart() {
      return {
        series: [80, 50, 35],
        chartOptions: {
          colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series4],
          plotOptions: {
            radialBar: {
              size: 185,
              hollow: {
                size: '25%',
              },
              track: {
                margin: 15,
              },
              dataLabels: {
                name: {
                  fontSize: '2rem',
                  fontFamily: 'Montserrat',
                },
                value: {
                  fontSize: '1rem',
                  fontFamily: 'Montserrat',
                },
                total: {
                  show: true,
                  fontSize: '1rem',
                  label: 'Comments',
                  formatter() {
                    return '80%'
                  },
                },
              },
            },
          },
          legend: {
            show: true,
            position: 'bottom',
            horizontalAlign: 'center',
          },
          stroke: {
            lineCap: 'round',
          },
          labels: ['Comments', 'Replies', 'Shares'],
        },
      }
    },
    barChart() {
      return {
        series: [
          {
            data: [700, 350, 480, 600, 210, 550, 150],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          colors: $themeColors.info,
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: '30%',
              endingShape: 'rounded',
            },
          },
          grid: {
            xaxis: {
              lines: {
                show: false,
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23'],
          },
          yaxis: {
          // opposite: isRtl,
          },
        },
      }
    },
    lineChart() {
      return {
        series: [
          {
            data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50],
          },
        ],
        chartOptions: {
          chart: {
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          markers: {
            strokeWidth: 7,
            strokeOpacity: 1,
            strokeColors: [$themeColors.light],
            colors: [$themeColors.warning],
          },
          colors: [$themeColors.warning],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'straight',
          },
          grid: {
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          tooltip: {
            custom(data) {
              return `${'<div class="px-1 py-50"><span>'}${
                data.series[data.seriesIndex][data.dataPointIndex]
              }%</span></div>`
            },
          },
          xaxis: {
            categories: [
              '7/12',
              '8/12',
              '9/12',
              '10/12',
              '11/12',
              '12/12',
              '13/12',
              '14/12',
              '15/12',
              '16/12',
              '17/12',
              '18/12',
              '19/12',
              '20/12',
              '21/12',
            ],
          },
          yaxis: {
            // opposite: isRtl,
          },
        },
      }
    },
    scatterChart() {
      return {
        series: [
          {
            name: 'Angular',
            data: [
              [5.4, 170],
              [5.4, 100],
              [6.3, 170],
              [5.7, 140],
              [5.9, 130],
              [7.0, 150],
              [8.0, 120],
              [9.0, 170],
              [10.0, 190],
              [11.0, 220],
              [12.0, 170],
              [13.0, 230],
            ],
          },
          {
            name: 'Vue',
            data: [
              [14.0, 220],
              [15.0, 280],
              [16.0, 230],
              [18.0, 320],
              [17.5, 280],
              [19.0, 250],
              [20.0, 350],
              [20.5, 320],
              [20.0, 320],
              [19.0, 280],
              [17.0, 280],
              [22.0, 300],
              [18.0, 120],
            ],
          },
          {
            name: 'React',
            data: [
              [14.0, 290],
              [13.0, 190],
              [20.0, 220],
              [21.0, 350],
              [21.5, 290],
              [22.0, 220],
              [23.0, 140],
              [19.0, 400],
              [20.0, 200],
              [22.0, 90],
              [20.0, 120],
            ],
          },
        ],
        chartOptions: {
          chart: {
            zoom: {
              enabled: true,
              type: 'xy',
            },
            toolbar: {
              show: false,
            },
          },
          grid: {
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          colors: [$themeColors.warning, $themeColors.primary, $themeColors.success],
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
          },
          xaxis: {
            tickAmount: 10,
            labels: {
              formatter(val) {
                return parseFloat(val).toFixed(1)
              },
            },
          },
          yaxis: {
          // opposite: isRtl,
          },
        },
      }
    },
    rangePicker() {
      return [
        '2019-05-01',
        '2019-05-10',
      ]
    },
    statisticsItems() {
      return [
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '2376670k',
        },
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '230k',
        },
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '230k',
        },
        {
          color: 'light-primary',
          customClass: 'mb-2 mb-xl-0',
          icon: 'TrendingUpIcon',
          subtitle: 'Sales',
          title: '230k',
        },
      ]
    },
    lineAreaChart() {
      return {
        series: [
          {
            name: 'Visits',
            data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
          },
          {
            name: 'Clicks',
            data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
          },
          {
            name: 'Sales',
            data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: false,
            curve: 'straight',
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            fontSize: '14px',
            fontFamily: 'Montserrat',
          },
          grid: {
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          xaxis: {
            categories: [
              '7/12',
              '8/12',
              '9/12',
              '10/12',
              '11/12',
              '12/12',
              '13/12',
              '14/12',
              '15/12',
              '16/12',
              '17/12',
              '18/12',
              '19/12',
              '20/12',
            ],
          },
          yaxis: {
            // opposite: isRtl
          },
          fill: {
            opacity: 1,
            type: 'solid',
          },
          tooltip: {
            shared: false,
          },
          colors: [chartColors.area.series3, chartColors.area.series2, chartColors.area.series1],
        },
      }
    },
  },
}
</script>
