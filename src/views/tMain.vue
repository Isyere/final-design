<template>
  <!-- 辅导员端界面 -->
  <el-container>
    <!-- 侧边栏区域 -->
    <el-aside width="auto">
      <tCommonAside></tCommonAside>
    </el-aside>
    <el-container>
      <!-- 头部栏区域 -->
      <el-header>
        <tCommonHeader></tCommonHeader>
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
import tCommonAside from '@/components/tCommonAside'
import tCommonHeader from '@/components/tCommonHeader'
import CommonTag from '@/components/CommonTags.vue'

export default {
  data() {
    return {
      name: 'tMain',
      isCollapsed: true
    }
  },
  components: {
    tCommonAside,
    tCommonHeader,
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