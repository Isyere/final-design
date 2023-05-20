<template>
  <div class="stuBox">
    <div class="stuInfoBox">
      <h2>个人信息</h2>
      <hr />
      <el-row :gutter="0">
        <el-col :span="24">
          <div class="bg-purple stuInfo">
            <img :src="tInfoData.t_pic" :onerror="defaultImg" />
            <div>姓名：{{ tInfoData.username }}</div>
            <div>性别：{{ tInfoData.sex }}</div>
            <div>最大属班：{{ tInfoData.manageclassmax }}</div>
            <div>最小属班：{{ tInfoData.manageclassmin }}</div>
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
      tInfoData: {}
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      this.axios
        .get('http://127.0.0.1:8080/t/getTInfoData', {
          headers: {
            //传入登录账号对应的token字段
            Authorization: window.localStorage.getItem('tToken')
          }
        })
        .then((res) => {
          this.tInfoData = res.data.data[0]
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
.stuBox {
  width: 99%;
}
.stuInfoBox {
  position: relative;
  top: 100px;
  left: 15%;
  width: 65%;
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
}
</style>

