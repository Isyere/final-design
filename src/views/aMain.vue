<template>
  <!-- 辅导员端界面 -->
  <el-container>
    <!-- 侧边栏区域 -->
    <el-aside width="auto">
      <aCommonAside></aCommonAside>
    </el-aside>
    <el-container>
      <!-- 头部栏区域 -->
      <el-header>
        <aCommonHeader></aCommonHeader>
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
import aCommonAside from '@/components/aCommonAside'
import aCommonHeader from '@/components/aCommonHeader'
import CommonTag from '@/components/CommonTags.vue'

export default {
  data() {
    return {
      name: 'aMain',
      isCollapsed: true
    }
  },
  components: {
    aCommonAside,
    aCommonHeader,
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