<template>
  <div class="staContainer">
    <div class="title">
      <h1>评价标准</h1>
    </div>
    <div class="text text-wrapper">
      <span>{{ standard }}</span>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      standard:
        '1.学生综合素质教育管理系统是基于课内学业成绩与课外拓展相结合。\n2.课内学业成绩基于学生绩点。\n3.课外拓展评价基于“德智体美劳”并细分为“十二个核心素养”，分别为“道德实践与家国情怀”、“身心素养与自我管理”、“诚实守信与奉献精神”、“艺术涵养与美感素养”、“学习态度与学习能力”、“多元文化与国际视野”、“规划执行与逻辑思辨”、“劳动观念与劳动技能”、“分析问题与系统思考”、“人际关系与团队合作”、“创新实践与核心素养”、“工具使用与内涵建设”。'
    }
  }
}
</script>

<style lang="less" scoped>
.text-wrapper {
  white-space: pre-wrap;
}
h1 {
  position: relative;
  top: 10px;
  left: -35px;
  font-size: 40px;
  text-align: center;
}
.title {
  position: relative;
  top: 30px;
}
.text {
  position: relative;
  top: 30px;
  left: 25%;
  width: 800px;
  border: solid 1px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  font-size: 30px;
  text-align: left;
  padding: 15px;
}
.staContainer {
  position: relative;
  top: 20px;
  width: 100%;
  height: 80%;
  background-color: white;
}
</style>