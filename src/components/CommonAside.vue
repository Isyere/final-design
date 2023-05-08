<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollapse"
  >
    <h3>{{ isCollapse ? '管理' : '学生综合信息管理系统' }}</h3>
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
          path: '/main/home',
          label: '评价标准',
          name: 'home',
          icon: 's-home'
        },
        {
          path: '/main/stuEleDoc',
          label: '学生电子档案',
          name: 'stuEleDoc',
          icon: 's-custom'
        },
        {
          path: '/main/dataView',
          label: '素质可视化',
          name: 'dataView',
          icon: 's-marketing'
        },
        {
          path: '/main/dataChange',
          label: '信息修改',
          name: 'dataChange',
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
