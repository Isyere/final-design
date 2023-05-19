<template>
  <div class="tmaBox">
    <div class="tmaBox-header">
      <!-- form搜索区 -->
      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input
            clearable
            placeholder="请输入学号"
            v-model="userForm.stu_id"
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
        <el-table-column prop="stu_id" label="学号" width="150">
        </el-table-column>
        <el-table-column prop="class" label="班级" width="150">
        </el-table-column>
        <el-table-column prop="keyName" label="申请项" width="220">
        </el-table-column>
        <el-table-column prop="keyKind" label="申请项代号" width="180">
        </el-table-column>
        <el-table-column prop="year" label="学年" width="100">
        </el-table-column>
        <el-table-column prop="content" label="证明文件" width="470">
          <template slot-scope="scope">
            <a :href="scope.row.content" target="_blank">
              {{ scope.row.content }}
            </a>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button type="success" size="mini" @click="agree(scope.row)">
              同意
            </el-button>
            <el-button type="danger" size="mini" @click="refuse(scope.row)">
              拒绝
            </el-button>
          </template>
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
  name: 'examine',
  data() {
    return {
      dialogVisible: false,
      form: {
        stu_id: '',
        class: '',
        keyName: '',
        keyKind: '',
        year: '',
        content: ''
      },
      tableData: [],
      total: 0, //当前总条数
      pageData: {
        page: 1,
        limit: 10
      },
      userForm: {
        stu_id: ''
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
    agree(row) {
      this.axios
        .post('http://127.0.0.1:8080/stu/examineAgree', row, {
          headers: {
            //传入登录账号对应的token字段
            Authorization: window.localStorage.getItem('tToken'),
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        })
        .then((res) => {
          this.$message({
            type: res.data.status ? 'error' : 'success',
            message: res.data.message
          })
          this.dataGet()
        })
    },
    refuse(row) {
      this.axios
        .post('http://127.0.0.1:8080/stu/examineRefuse', row, {
          headers: {
            //传入登录账号对应的token字段
            Authorization: window.localStorage.getItem('tToken'),
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        })
        .then((res) => {
          this.$message({
            type: res.data.status ? 'error' : 'success',
            message: res.data.message
          })
          this.dataGet()
        })
    },
    dataGet() {
      this.axios
        .get('http://127.0.0.1:8080/stu/getExamine', {
          headers: {
            //传入登录账号对应的token字段
            Authorization: window.localStorage.getItem('tToken'),
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