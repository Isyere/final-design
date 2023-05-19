<template>
  <div class="tmaBox">
    <div class="tmaBox-header">
      <!-- form搜索区 -->
      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input
            clearable
            placeholder="请输入申请项"
            v-model="userForm.keyName"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="common-table">
      <el-table
        stripe
        height="90%"
        :data="tableData"
        style="width: 90%"
        class="tableBox"
        :header-cell-style="{ 'text-align': 'center' }"
        :cell-style="{ 'text-align': 'center' }"
      >
        <el-table-column prop="keyName" label="申请项" width="270">
        </el-table-column>
        <el-table-column prop="keyKind" label="申请项代号" width="180">
        </el-table-column>
        <el-table-column prop="year" label="学年" width="150">
        </el-table-column>
        <el-table-column prop="content" label="证明文件" width="624">
          <template slot-scope="scope">
            <a :href="scope.row.content" target="_blank">
              {{ scope.row.content }}
            </a>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态" width="247">
        </el-table-column>
      </el-table>
      <div class="pager">
        <el-pagination
          layout="prev, pager, next"
          :total="total"
          @current-change="handlePage"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'examineCheck',
  data() {
    return {
      dialogVisible: false,
      form: {
        keyName: '',
        keyKind: '',
        year: '',
        content: '',
        status: ''
      },
      tableData: [],
      total: 0, //当前总条数
      pageData: {
        page: 1,
        limit: 10
      },
      userForm: {
        keyName: ''
      }
    }
  },

  methods: {
    onSubmit() {
      this.dataGet()
    },
    handlePage(val) {
      this.pageData.page = val
      this.dataGet()
    },
    dataGet() {
      this.axios
        .get('http://127.0.0.1:8080/stu/examineCheck', {
          headers: {
            //传入登录账号对应的token字段
            Authorization: window.localStorage.getItem('stutoken'),
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          params: { ...this.pageData, ...this.userForm }
        })
        .then((res) => {
          this.total = res.data.total
          this.tableData = res.data.data
          this.$message({
            type: res.data.status ? 'error' : 'success',
            message: res.data.message
          })
        })
    }
  },
  mounted() {
    this.dataGet()
  }
}
</script>

<style lang = 'less' scoped>
.tmaBox {
  height: 90%;
  width: 95%;
  .tmaBox-header {
    position: relative;
    left: 80px;
    width: 91%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .common-table {
    position: relative;
    top: 20px;
    left: 80px;
    height: calc(100% - 62px);
    .pager {
      position: absolute;
      bottom: 0;
      right: 165px;
    }
  }
}
</style>