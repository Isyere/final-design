<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? '导员端' : '管理系统辅导员端' }}</h3>
    <el-menu-item
      @click="clickMenu(item)"
      v-for="item in menuData"
      :key="item.name"
      :index="item.name"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
  </el-menu>
</template>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 400px;
  min-height: 400px;
}
</style>

<script>
export default {
  data() {
    return {
      activeIndex: this.$route.name,
      menuData: [
        {
          path: '/tmain/tInfoData',
          label: '个人信息',
          name: 'tInfoData',
          icon: 's-custom'
        },
        {
          path: '/tmain/examine',
          label: '审批',
          name: 'examine',
          icon: 's-order'
        },
        {
          path: '/tmain/tDataChange',
          label: '信息修改',
          name: 'tDataChange',
          icon: 's-order'
        }
      ]
    }
  },
  methods: {
    clickMenu(item) {
      this.$router.push(item.path)
      this.$store.commit('selectMenu', item)
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse
    }
  }
}
</script>
<style lang="less" scoped>
.el-menu:not(.el-menu--collapse) {
  width: 200px; /*min-height: 400px; */
}
.el-menu {
  height: 100vh;
  border-right: none;

  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
