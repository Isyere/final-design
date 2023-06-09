export default {
  state: {
    isCollapse: false, //控制菜单的展开还是收起
    tabsList: [
    ]//面包屑数据
  },
  mutations: {
    //修改菜单展开还是收起的方法
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse
    },
    //更新面包屑数据
    selectMenu(state, val) {
      const index = state.tabsList.findIndex(item => item.name === val.name)
      if (index === -1) {
        state.tabsList.push(val)
      }
    },
    //删除指定的tag数据
    closeTag(state, item) {
      const index = state.tabsList.findIndex(val => val.name === item.name)
      state.tabsList.splice(index, 1)
    },
    closeTagAll(state) {
      state.tabsList = []
    }
  }
}