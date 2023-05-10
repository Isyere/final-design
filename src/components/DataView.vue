<template>
  <div class="echarts-box">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <v-chart autoresize :option="option_column" style="height: 350px">
          </v-chart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option_column: {
        title: { text: '能力指标趋势图' },
        tooltip: {},
        legend: {
          data: ['第一学年', '第二学年', '第三学年', '第四学年']
        },
        xAxis: {
          data: [
            '学习态度与学习能力',
            '多元文化与国际视野',
            '规划执行与逻辑思辨',
            '劳动观念与劳动技能',
            '道德实践与家国情怀',
            '身心素养与自我管理',
            '诚实守信与奉献精神',
            '艺术涵养与美感素养',
            '分析问题与系统思考',
            '人际关系与团队合作',
            '创新实践与核心素养',
            '工具使用与内涵建设'
          ],
          axisLabel: {
            interval: 0
          }
        },
        yAxis: {},
        series: [
          {
            name: '第一学年',
            type: 'bar',
            data: [],
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: '第二学年',
            type: 'bar',
            data: [],
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: '第三学年',
            type: 'bar',
            data: [],
            emphasis: {
              focus: 'series'
            }
          },
          {
            name: '第四学年',
            type: 'bar',
            data: [],
            emphasis: {
              focus: 'series'
            }
          }
        ],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: true },
            magicType: { type: ['line', 'bar'] },
            saveAsImage: {}
          }
        },
        grid: {
          left: '2.8%',
          right: '0.5%',
          bottom: '6%'
        },
        dataZoom: [
          {
            show: true,
            type: 'inside',
            filterMode: 'none',
            xAxisIndex: [0],
            startValue: -100,
            endValue: 100
          }
        ]
      },
      yearData: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      await this.axios
        .get('http://127.0.0.1:8080/stu/stuEcharts', {
          headers: {
            //传入登录账号对应的token字段
            Authorization: window.localStorage.getItem('stutoken')
          }
        })
        .then((res) => {
          for (let i = 0; i < 4; i++) {
            this.option_column.series[i].data = [
              res.data.data[i].key_one,
              res.data.data[i].key_two,
              res.data.data[i].key_three,
              res.data.data[i].key_four,
              res.data.data[i].key_five,
              res.data.data[i].key_six,
              res.data.data[i].key_seven,
              res.data.data[i].key_eight,
              res.data.data[i].key_nine,
              res.data.data[i].key_ten,
              res.data.data[i].key_eleven,
              res.data.data[i].key_twelve
            ]
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style lang= 'less' scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: white;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.echarts-box {
  box-sizing: border-box;
  width: 90%;
  position: relative;
  top: 50px;
  left: 80px;
}
</style>
