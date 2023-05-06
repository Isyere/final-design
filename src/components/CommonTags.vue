<template>
  <div class="tags">
    <el-tag
      v-for="(item, index) in tags"
      :key="item.path"
      :closable="item.name !== 'home'"
      :effect="$route.name === item.name ? 'dark' : 'plain'"
      @click="changeMenu(item)"
      @close="handleClose(item, index)"
      size="small"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CommonTag',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      tags: (state) => state.tab.tabsList
    })
  },
  methods: {
    ...mapMutations(['closeTag']),
    //点击tag跳转
    changeMenu(item) {
      this.$router.push({ name: item.name })
    },
    //点击tag删除
    handleClose(item, index) {
      this.closeTag(item)
      const length = this.tags.length
      if (item.name !== this.$route.name) {
        return
      }
      //删除最后一项
      if (index === length) {
        this.$router.push({ name: this.tags[index - 1].name })
      } else {
        this.$router.push({ name: this.tags[index].name })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.tags {
  background-color: #f3f9f1;
  padding: 20px;
  .el-tag {
    margin-right: 15px;
    cursor: pointer;
  }
}
</style>