<template>
  <el-container>
    <!-- 侧边栏区域 -->
    <el-aside width="auto">
      <CommonAside></CommonAside>
    </el-aside>
    <el-container>
      <!-- 头部栏区域 -->
      <el-header>
        <CommonHeader></CommonHeader>
      </el-header>
      <CommonTag></CommonTag>
      <el-main>
        <!-- 路由区域 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside'
import CommonHeader from '@/components/CommonHeader'
import CommonTag from '@/components/CommonTags.vue'

export default {
  data() {
    return {
      name: 'Main',
      isCollapsed: true
    }
  },
  components: {
    CommonAside,
    CommonHeader,
    CommonTag
  },
  methods: {}
}
</script>

<style>
.el-header {
  padding: 0;
}
.el-main {
  padding: 0;
  margin: 0;
  background-color: #f3f9f1;
}
</style>