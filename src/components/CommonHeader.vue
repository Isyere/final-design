<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        style="margin-right: 20px"
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          <img class="user" :src="picPath" :onerror="defaultImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="/">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      picPath: ''
    }
  },
  created() {
    this.getData()
  },
  methods: {
    ...mapMutations(['closeTagAll']),
    handleMenu() {
      this.$store.commit('collapseMenu')
    },
    handleCommand(path) {
      this.closeTagAll()
      window.localStorage.removeItem('token')
      this.$router.push(path)
    },
    async getData() {
      await this.axios
        .get('http://127.0.0.1:8080/stu/stuInfo', {
          headers: {
            //传入登录账号对应的token字段
            Authorization: window.localStorage.getItem('token')
          }
        })
        .then((res) => {
          this.picPath = res.data.data[0].stu_pic
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList
    }),
    defaultImg() {
      return 'this.src="' + require('../pic/user.jpeg') + '"'
    }
  }
}
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    color: white;
    font-size: 14px;
    margin-left: 10px;
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .l-content {
    display: flex;
    align-items: center;
    /deep/.el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: normal;
        &.is-link {
          color: #666;
        }
      }
      &:last-child {
        .el-breadcrumb__inner {
          color: #fff;
        }
      }
    }
  }
}
</style>