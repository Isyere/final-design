<template>
  <div class="stuBox">
    <div class="stuInfoBox">
      <h2>个人信息</h2>
      <hr />
      <el-row :gutter="0">
        <el-col :span="24">
          <div class="bg-purple stuInfo">
            <img :src="stuinfo.stu_pic" :onerror="defaultImg" />
            <div>姓名：{{ stuinfo.stu_name }}</div>
            <div>学号：{{ stuinfo.stu_id }}</div>
            <div>班级：{{ stuinfo.stu_class }}</div>
            <div>平均绩点：{{ stuinfo.gpa }}</div>
            <div class="redcolor">综合评分：{{ average | numFilter }}</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="twelveKeysBox">
      <h2>素养评分</h2>
      <hr />
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            学习态度与学习能力
            <hr />
            <p>{{ stuinfo.key_one }}分</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            多元文化与国际视野
            <hr />
            <p>{{ stuinfo.key_two }}分</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            规划执行与逻辑思辨
            <hr />
            <p>{{ stuinfo.key_three }}分</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            劳动观念与劳动技能
            <hr />
            <p>{{ stuinfo.key_four }}分</p>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            道德实践与家国情怀
            <hr />
            <p>{{ stuinfo.key_five }}分</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            身心素养与自我管理
            <hr />
            <p>{{ stuinfo.key_six }}分</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            诚实守信与奉献精神
            <hr />
            <p>{{ stuinfo.key_seven }}分</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            艺术涵养与美感素养
            <hr />
            <p>{{ stuinfo.key_eight }}分</p>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            分析问题与系统思考
            <hr />
            <p>{{ stuinfo.key_nine }}分</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            人际关系与团队合作
            <hr />
            <p>{{ stuinfo.key_ten }}分</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            创新实践与核心素养
            <hr />
            <p>{{ stuinfo.key_eleven }}分</p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            工具使用与内涵建设
            <hr />
            <p>{{ stuinfo.key_twelve }}分</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'stuEleDoc',
      stuinfo: {},
      average: ''
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      await this.axios
        .get('http://127.0.0.1:8080/stu/stuInfo', {
          headers: {
            //传入登录账号对应的token字段
            Authorization: window.localStorage.getItem('stutoken')
          }
        })
        .then((res) => {
          this.stuinfo = res.data.data[0]
          this.average =
            (this.stuinfo.key_one +
              this.stuinfo.key_two +
              this.stuinfo.key_three +
              this.stuinfo.key_four +
              this.stuinfo.key_five +
              this.stuinfo.key_six +
              this.stuinfo.key_seven +
              this.stuinfo.key_eight +
              this.stuinfo.key_nine +
              this.stuinfo.key_ten +
              this.stuinfo.key_eleven +
              this.stuinfo.key_twelve +
              (this.stuinfo.gpa / 5) * 100) /
            13
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    defaultImg() {
      return 'this.src="' + require('../pic/user.jpeg') + '"'
    }
  },
  filters: {
    numFilter(value) {
      // 截取当前数据到小数点后两位
      let realVal = parseFloat(value).toFixed(2)
      return realVal
    }
  }
}
</script>

<style lang="less" scoped>
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
  padding-top: 5px;
  border-radius: 4px;
  border: 1px solid;
  min-height: 60px;
  text-align: center;
  font-size: 20px;
  p {
    color: blue;
  }
}
.twelveKeysBox {
  position: relative;
  top: 10px;
  left: 20px;
  width: 98%;
  p {
    padding-bottom: 20px;
  }
}
.stuBox {
  width: 99%;
}
.stuInfoBox {
  position: relative;
  left: 20px;
  width: 98%;
}
.stuInfo {
  padding-left: 20px;
  width: 100%;
  height: 170px;
  border: 1px solid;
  display: flex;
  align-items: center;
  span {
    text-align: center;
  }
  img {
    margin-left: 10px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  div {
    width: 200px;
    height: 30px;
    margin: 15px;
    border: 1px solid blue;
    color: blue;
    font-size: 20px;
    border-radius: 25px;
    text-align: center;
  }
  .redcolor {
    color: red;
  }
}
</style>

