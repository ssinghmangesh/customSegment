<template>
  <b-col
    :cols="defaultCol"
    :md="mdCol"
  >
    <statistics
      v-if="graphType === 'statistics'"
      :data="statisticsItems"
      title="Customer counts"
    />
    <apex-line-area-chart
      v-else-if="graphType === 'apex-line-area-chart'"
      title="Apex Line Area Chart"
      :data="lineAreaChart"
      :range-picker="rangePicker"
    />
    <apex-scatter-chart
      v-else-if="graphType === 'apex-scatter-chart'"
      title="Apex Scatter Chart"
      :data="scatterChart"
    />
    <apex-line-chart
      v-else-if="graphType === 'apex-line-chart'"
      :balance="100"
      :title="item.title"
      subtitle="Apex Line Chart"
      :change="10"
      :data="lineChart"
    />
    <apex-bar-chart
      v-else-if="graphType === 'apex-bar-chart'"
      title="Apex Bar Chart"
      subtitle="Apex Bar Chart"
      :data="barChart"
      :range-picker="rangePicker"
    />
    <apex-radial-bar-chart
      v-else-if="graphType === 'apex-radial-bar-chart'"
      title="Apex Radial Bar Chart"
      :data="radialBarChart"
    />
    <apex-donut-chart
      v-else-if="graphType === 'apex-donut-chart'"
      :title="item.title"
      :data="donutChart"
    />
    <echart-line
      v-else-if="graphType === 'echart-line'"
      title="Echart Line"
      subtitle="Echart Line"
      balance="100"
      change="10"
      :data="echartLine"
    />
    <echart-stacked-area
      v-else-if="graphType === 'echart-stacked-area'"
      title="Echart Stacked Area"
      :data="echartStackedArea"
    />
    <echart-area
      v-else-if="graphType === 'echart-area'"
      title="Echart Area"
      :data="echartArea"
    />
    <echart-doughnut
      v-else-if="graphType === 'echart-doughnut'"
      title="Echart Doughnut"
      total="45623"
      :data="echartDoughnut"
    />
    <echart-scatter
      v-else-if="graphType === 'echart-scatter'"
      title="Echart Scatter"
      :data="echartScatter"
    />
    <ecommerce-order-chart
      v-else-if="graphType === 'ecommerce-order-chart'"
      :data="data.statisticsOrder"
      title="Order"
      total="100"
    />
    <ecommerce-profit-chart
      v-else-if="graphType === 'ecommerce-profit-chart'"
      :data="data.statisticsProfit"
      title="Profit"
      total="100$"
    />
    <ecommerce-earnings-chart
      v-else-if="graphType === 'ecommerce-earnings-chart'"
      total="50026$"
      change="40%"
      :data="data.earningsChart"
    />
    <ecommerce-goal-overview
      v-else-if="graphType === 'ecommerce-goal-overview'"
      title="Goal Overview"
      :data="data.goalOverview"
    />
    <ecommerce-browser-states
      v-else-if="graphType === 'ecommerce-browser-states'"
      :data="browserStates"
      :title="item.title"
      :subtitle="item.subtitle"
    />
    <ecommerce-transactions
      v-else-if="graphType === 'ecommerce-transactions'"
      :title="item.title"
      :data="data.transactionData"
    />
    <ecommerce-company-table
      v-else-if="graphType === 'ecommerce-company-table'"
      :fields="item.fields"
      :table-data="data"
    />
  </b-col>
</template>

<script>
// import { getUserData } from '@/auth/utils'
import Statistics from '@/views/sharedcomponents/Statistics.vue'
import ApexLineAreaChart from '@/views/charts-and-maps/charts/apex-chart/ApexLineAreaChart.vue'
import ApexScatterChart from '@/views/charts-and-maps/charts/apex-chart/ApexScatterChart.vue'
import ApexLineChart from '@/views/charts-and-maps/charts/apex-chart/ApexLineChart.vue'
import ApexBarChart from '@/views/charts-and-maps/charts/apex-chart/ApexBarChart.vue'
import ApexRadialBarChart from '@/views/charts-and-maps/charts/apex-chart/ApexRadialBarChart.vue'
import ApexDonutChart from '@/views/charts-and-maps/charts/apex-chart/ApexDonutChart.vue'
import EchartLine from '@/views/charts-and-maps/charts/echart/EchartLine.vue'
import EchartStackedArea from '@/views/charts-and-maps/charts/echart/EchartStackedArea.vue'
import EchartArea from '@/views/charts-and-maps/charts/echart/EchartArea.vue'
import EchartDoughnut from '@/views/charts-and-maps/charts/echart/EchartDoughnut.vue'
import EchartScatter from '@/views/charts-and-maps/charts/echart/EchartScatter.vue'
import { BCol } from 'bootstrap-vue'
import { $themeColors } from '@themeConfig'
import EcommerceOrderChart from '@/views/dashboard/ecommerce/EcommerceOrderChart.vue'
import EcommerceProfitChart from '@/views/dashboard/ecommerce/EcommerceProfitChart.vue'
import EcommerceEarningsChart from '@/views/dashboard/ecommerce/EcommerceEarningsChart.vue'
import EcommerceGoalOverview from '@/views/dashboard/ecommerce/EcommerceGoalOverview.vue'
import EcommerceBrowserStates from '@/views/dashboard/ecommerce/EcommerceBrowserStates.vue'
import EcommerceTransactions from '@/views/dashboard/ecommerce/EcommerceTransactions.vue'
import EcommerceCompanyTable from '@/views/dashboard/ecommerce/EcommerceCompanyTable.vue'
// import Vue from 'vue'

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
    ApexLineAreaChart,
    ApexScatterChart,
    ApexLineChart,
    ApexBarChart,
    ApexRadialBarChart,
    ApexDonutChart,
    EchartLine,
    EchartStackedArea,
    EchartArea,
    BCol,
    EchartDoughnut,
    EchartScatter,
    EcommerceOrderChart,
    EcommerceProfitChart,
    EcommerceEarningsChart,
    EcommerceGoalOverview,
    EcommerceBrowserStates,
    EcommerceTransactions,
    EcommerceCompanyTable,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      data: {},
      series: [],
      labels: [],
      colors: [],
    }
  },
  computed: {
    browserStates() {
      /* eslint-disable global-require */
      return [
        {
          browserImg: require('@/assets/images/icons/google-chrome.png'),
          name: 'Google Chrome',
          usage: '54.4%',
        },
        {
          browserImg: require('@/assets/images/icons/mozila-firefox.png'),
          name: 'Mozila Firefox',
          usage: '6.1%',
        },
        {
          browserImg: require('@/assets/images/icons/apple-safari.png'),
          name: 'Apple Safari',
          usage: '14.6%',
        },
        {
          browserImg: require('@/assets/images/icons/internet-explorer.png'),
          name: 'Internet Explorer',
          usage: '4.2%',
        },
        {
          browserImg: require('@/assets/images/icons/opera.png'),
          name: 'Opera Mini',
          usage: '8.%',
        },
      ]
    },
    echartScatter() {
      return {
        selected: 'radio1',
        radioOption: [
          { text: 'Daily', value: 'radio1' },
          { text: 'Monthly', value: 'radio2' },
          { text: 'Yearly', value: 'radio4' },
        ],
        option: {
          series: [
            {
              name: 'iPhone',
              symbolSize: 10,
              data: [[72, 225], [81, 270], [90, 230], [103, 305], [103, 245], [108, 275], [110, 290], [111, 315], [109, 350], [116, 340], [113, 260], [117, 275], [117, 295], [126, 280], [127, 340], [133, 330],
              ],
              type: 'scatter',
            },
            {
              name: 'Samsung Note',
              symbolSize: 10,
              data: [[13, 95], [22, 105], [17, 115], [19, 130], [21, 125], [35, 125], [13, 155], [21, 165], [25, 155], [18, 190], [26, 180], [43, 180], [53, 202], [61, 165], [67, 225],
              ],
              type: 'scatter',
              itemStyle: {
                color: '#FF9F43',
              },
            },
            {
              name: 'OnePlus',
              symbolSize: 10,
              data: [[70, 195], [72, 270], [98, 255], [100, 215], [87, 240], [94, 280], [99, 300], [102, 290], [110, 275], [111, 250], [94, 280], [92, 340], [100, 335], [108, 330]],
              type: 'scatter',
              itemStyle: {
                color: '#00CFE8',
              },
            },
          ],
        },
      }
    },
    echartDoughnut() {
      return {
        series: [
          {
            name: 'Visit source',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: 'Point One' },
              { value: 310, name: 'Point Two' },
              { value: 234, name: 'Point Three' },
              { value: 435, name: 'Point Four' },
            ],
          },
        ],
      }
    },
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
      const { series, labels, colors } = this
      return {
        series,
        chartOptions: {
          legend: {
            show: true,
            position: 'bottom',
            fontSize: '14px',
            fontFamily: 'Montserrat',
          },
          colors,
          dataLabels: {
            enabled: true,
            formatter(val) {
              return `${parseInt(val, 10)}%`
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
                      return `${parseInt(val)}`
                    },
                  },
                  total: {
                    show: true,
                    fontSize: '1.5rem',
                    label: labels[0],
                    formatter() {
                      return series[0]
                    },
                  },
                },
              },
            },
          },
          labels,
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
      const { series } = this
      return {
        series,
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
          colors: ['#2E93fA'],
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: this.item.curve,
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
  async created() {
    await this.update()
  },
  methods: {
    async update() {
      if (this.graphType === 'apex-donut-chart') {
        const response = await this.$http.post('/analytics-manager/pie-chart', this.item.data)
        // console.log('response : ', response.data)
        response.data.data.forEach((d, index) => {
          this.series.push(Number(d.count))
          this.labels.push(d[this.item.data.columnname])
          this.colors.push(this.getColor(index))
        })
      } else if (this.graphType === 'apex-line-chart') {
        const response = await this.$http.post('/analytics-manager/line-graph', this.item.data)
        const data = response.data.data.map(value => ({
          x: value.x,
          y: value.y,
        }))
        this.series.push({
          type: this.item.graphCatergory,
          data,
        })
      } else if (this.graphType === 'ecommerce-company-table') {
        const response = await this.$http.post('/analytics-manager/table', this.item.data)
        this.data = [...response.data.data]
      } else {
        this.$http.get('/ecommerce/data')
          .then(response => {
            this.data = response.data
          })
      }
    },
    getColor(index) {
      const color = ['#004e96', '#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800', '#ffe700', '#00d4bd', '#826bf8', '#2b9bf4', '#FFA1A1']
      return color[index]
    },
  },
}
</script>
