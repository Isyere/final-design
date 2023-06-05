<template>
  <div class="tmaBox">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="handleClose"
    >
      <!-- 用户表单信息 -->
      <el-form
        ref="form"
        :rules="rules"
        :inline="true"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="姓名" prop="username">
          <el-input
            clearable
            placeholder="请输入姓名"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select placeholder="请选择" v-model="form.sex">
            <el-option label="男" value="男"></el-option>
            <el-option label="女" value="女"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="账号" prop="t_name">
          <el-input
            clearable
            placeholder="请输入账号"
            v-model="form.t_name"
            v-show="modalType ? false : true"
          ></el-input>
          <el-input
            clearable
            placeholder="请输入账号"
            v-model="form.t_name"
            v-show="modalType ? true : false"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="t_password">
          <el-input
            clearable
            placeholder="请输入密码"
            v-model="form.t_password"
          ></el-input>
        </el-form-item>
        <el-form-item label="最小属班" prop="manageclassmin">
          <el-input
            clearable
            placeholder="请输入最小属班"
            v-model="form.manageclassmin"
          ></el-input>
        </el-form-item>
        <el-form-item label="最大属班" prop="manageclassmax">
          <el-input
            clearable
            placeholder="请输入最大属班"
            v-model="form.manageclassmax"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit"> 确 定 </el-button>
      </span>
    </el-dialog>
    <div class="tmaBox-header">
      <el-button @click="handleAdd" type="primary"> + 新增 </el-button>
      <!-- form搜索区 -->
      <el-form :inline="true" :model="userForm">
        <el-form-item>
          <el-input
            clearable
            placeholder="请输入姓名"
            v-model="userForm.name"
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
        <el-table-column prop="username" label="姓名" width="200">
        </el-table-column>
        <el-table-column prop="sex" label="性别" width="200"> </el-table-column>
        <el-table-column prop="t_name" label="账号" width="200">
        </el-table-column>
        <el-table-column prop="t_password" label="密码" width="200">
        </el-table-column>
        <el-table-column prop="manageclassmin" label="最小属班" width="200">
        </el-table-column>
        <el-table-column prop="manageclassmax" label="最大属班" width="200">
        </el-table-column>
        <el-table-column prop="username" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              type="danger"
              size="mini"
              @click="handleDelete(scope.row)"
            >
              删除
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
  name: 'tmanage',
  data() {
    return {
      dialogVisible: false,
      form: {
        username: '',
        t_name: '',
        t_password: '',
        manageclassmin: '',
        manageclassmax: '',
        sex: ''
      },
      rules: {
        username: [{ required: true, message: '请输入姓名' }],
        t_name: [{ required: true, message: '请输入账号' }],
        t_password: [{ required: true, message: '请输入密码' }],
        manageclassmin: [{ required: true, message: '请输入最小属班' }],
        manageclassmax: [{ required: true, message: '请输入最大属班' }],
        sex: [{ required: true, message: '请选性别' }]
      },
      tableData: [],
      modalType: 0, //0表示新增，1表示编辑
      total: 0, //当前总条数
      pageData: {
        page: 1,
        limit: 10
      },
      userForm: {
        name: ''
      }
    }
  },

  methods: {
    onSubmit() {
      this.dataGet()
    },
    handlePage(val) {
      console.log(val)
      this.pageData.page = val
      this.dataGet()
    },
    handleAdd() {
      this.modalType = 0
      this.dialogVisible = true
    },
    handleDelete(row) {
      this.$confirm('此操作将永久删除该条数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.axios
            .post('http://127.0.0.1:8080/t/deleteTAccount', row, {
              headers: {
                //传入登录账号对应的token字段
                Authorization: window.localStorage.getItem('admintoken'),
                'Content-Type':
                  'application/x-www-form-urlencoded;charset=utf-8'
              }
            })
            .then((res) => {
              this.$message({
                type: res.data.status ? 'error' : 'success',
                message: res.data.message
              })
              this.dataGet()
            })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    handleEdit(row) {
      this.modalType = 1
      this.dialogVisible = true
      this.form = JSON.parse(JSON.stringify(row))
    },
    dataGet() {
      this.axios
        .get('http://127.0.0.1:8080/t/getAccountData', {
          headers: {
            //传入登录账号对应的token字段
            Authorization: window.localStorage.getItem('admintoken'),
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
          },
          params: { ...this.pageData, ...this.userForm }
        })
        .then((res) => {
          this.total = res.data.total
          this.tableData = res.data.data
        })
    },
    //提交用户表单
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          if (this.modalType === 0) {
            this.axios
              .post('http://127.0.0.1:8080/t/newTAccount', this.form, {
                headers: {
                  //传入登录账号对应的token字段
                  Authorization: window.localStorage.getItem('admintoken'),
                  'Content-Type':
                    'application/x-www-form-urlencoded;charset=utf-8'
                }
              })
              .then((res) => {
                this.$message({
                  type: res.data.status ? 'error' : 'success',
                  message: res.data.message
                })
                this.dataGet()
              })
          } else {
            this.axios
              .post('http://127.0.0.1:8080/t/editTAccount', this.form, {
                headers: {
                  //传入登录账号对应的token字段
                  Authorization: window.localStorage.getItem('admintoken'),
                  'Content-Type':
                    'application/x-www-form-urlencoded;charset=utf-8'
                }
              })
              .then((res) => {
                this.$message({
                  type: res.data.status ? 'error' : 'success',
                  message: res.data.message
                })
                this.dataGet()
              })
          }
          //关闭弹窗
          this.$refs.form.resetFields()
          this.dialogVisible = false
        }
      })
    },
    //弹窗关闭触发
    handleClose() {
      this.$refs['form'].resetFields()
      this.dialogVisible = false
      this.form = ''
    },
    cancel() {
      this.handleClose()
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
    overflow: hidden;
    height: calc(100% - 62px);
    .pager {
      position: absolute;
      bottom: 0;
      right: 165px;
    }
  }
}
</style>