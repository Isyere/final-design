<template>
  <div class="tmaBox">
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="90%"
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
        <el-form-item label="学号" prop="stu_id">
          <el-input
            clearable
            placeholder="请输入学号"
            v-model="form.stu_id"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="stu_name">
          <el-input
            clearable
            placeholder="请输入姓名"
            v-model="form.stu_name"
          ></el-input>
        </el-form-item>
        <el-form-item label="班级" prop="stu_class">
          <el-input
            clearable
            placeholder="请输入班级"
            v-model="form.stu_class"
          ></el-input>
        </el-form-item>
        <el-form-item label="学院" prop="stu_college">
          <el-input
            clearable
            placeholder="请输入学院"
            v-model="form.stu_college"
          ></el-input>
        </el-form-item>
        <el-form-item label="绩点" prop="gpa">
          <el-input
            clearable
            placeholder="请输入绩点"
            v-model="form.gpa"
          ></el-input>
        </el-form-item>
        <el-form-item label="学年" prop="year">
          <el-input
            clearable
            placeholder="请输入学年"
            v-model="form.year"
            :disabled="true"
          ></el-input>
        </el-form-item>
        <el-form-item label="学习态度与学习能力" prop="key_one">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_one"
          ></el-input>
        </el-form-item>
        <el-form-item label="多元文化与国际视野" prop="key_two">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_two"
          ></el-input>
        </el-form-item>
        <el-form-item label="规划执行与逻辑思辨" prop="key_three">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_three"
          ></el-input>
        </el-form-item>
        <el-form-item label="劳动观念与劳动技能" prop="key_four">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_four"
          ></el-input>
        </el-form-item>
        <el-form-item label="道德实践与家国情怀" prop="key_five">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_five"
          ></el-input>
        </el-form-item>
        <el-form-item label="身心素养与自我管理" prop="key_six">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_six"
          ></el-input>
        </el-form-item>
        <el-form-item label="诚实守信与奉献精神" prop="key_seven">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_seven"
          ></el-input>
        </el-form-item>
        <el-form-item label="艺术涵养与美感素养" prop="key_eight">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_eight"
          ></el-input>
        </el-form-item>
        <el-form-item label="分析问题与系统思考" prop="key_nine">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_nine"
          ></el-input>
        </el-form-item>
        <el-form-item label="人际关系与团队合作" prop="key_ten">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_ten"
          ></el-input>
        </el-form-item>
        <el-form-item label="创新实践与核心素养" prop="key_eleven">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_eleven"
          ></el-input>
        </el-form-item>
        <el-form-item label="工具使用与内涵建设" prop="key_twelve">
          <el-input
            clearable
            placeholder="请输入分值"
            v-model="form.key_twelve"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit"> 确 定 </el-button>
      </span>
    </el-dialog>
    <div class="tmaBox-header">
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
      >
        <el-table-column prop="stu_id" label="学号" width="100">
        </el-table-column>
        <el-table-column prop="stu_name" label="姓名" width="100">
        </el-table-column>
        <el-table-column prop="stu_class" label="班级" width="100">
        </el-table-column>
        <el-table-column prop="stu_college" label="学院" width="200">
        </el-table-column>
        <el-table-column prop="gpa" label="绩点" width="50"> </el-table-column>
        <el-table-column prop="year" label="学年" width="50"> </el-table-column>
        <el-table-column prop="key_one" label="学习态度与学习能力" width="150">
        </el-table-column>
        <el-table-column prop="key_two" label="多元文化与国际视野" width="150">
        </el-table-column>
        <el-table-column
          prop="key_three"
          label="规划执行与逻辑思辨"
          width="150"
        >
        </el-table-column>
        <el-table-column prop="key_four" label="劳动观念与劳动技能" width="150">
        </el-table-column>
        <el-table-column prop="key_five" label="道德实践与家国情怀" width="150">
        </el-table-column>
        <el-table-column prop="key_six" label="身心素养与自我管理" width="150">
        </el-table-column>
        <el-table-column
          prop="key_seven"
          label="诚实守信与奉献精神"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="key_eight"
          label="艺术涵养与美感素养"
          width="150"
        >
        </el-table-column>
        <el-table-column prop="key_nine" label="分析问题与系统思考" width="150">
        </el-table-column>
        <el-table-column prop="key_ten" label="人际关系与团队合作" width="150">
        </el-table-column>
        <el-table-column
          prop="key_eleven"
          label="创新实践与核心素养"
          width="150"
        >
        </el-table-column>
        <el-table-column
          prop="key_twelve"
          label="工具使用与内涵建设"
          width="150"
        >
        </el-table-column>
        <el-table-column prop="username" label="操作" width="100">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
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
  name: 'stumanage',
  data() {
    return {
      dialogVisible: false,
      form: {
        stu_id: '',
        stu_name: '',
        stu_class: '',
        stu_college: '',
        gpa: '',
        year: '',
        key_one: '',
        key_two: '',
        key_three: '',
        key_four: '',
        key_five: '',
        key_six: '',
        key_seven: '',
        key_eight: '',
        key_nine: '',
        key_ten: '',
        key_eleven: '',
        key_twelve: ''
      },
      rules: {
        stu_name: [{ required: true, message: '请输入姓名' }],
        stu_class: [{ required: true, message: '请输入班级' }],
        stu_college: [{ required: true, message: '请输入学院' }],
        gpa: [{ required: true, message: '请输入最小属班' }],
        key_one: [{ required: true, message: '请输入分值' }],
        key_two: [{ required: true, message: '请输入分值' }],
        key_three: [{ required: true, message: '请输入分值' }],
        key_four: [{ required: true, message: '请输入分值' }],
        key_five: [{ required: true, message: '请输入分值' }],
        key_six: [{ required: true, message: '请输入分值' }],
        key_seven: [{ required: true, message: '请输入分值' }],
        key_eight: [{ required: true, message: '请输入分值' }],
        key_nine: [{ required: true, message: '请输入分值' }],
        key_ten: [{ required: true, message: '请输入分值' }],
        key_eleven: [{ required: true, message: '请输入分值' }],
        key_twelve: [{ required: true, message: '请输入分值' }]
      },
      tableData: [],
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
      this.pageData.page = val
      this.dataGet()
    },
    handleEdit(row) {
      this.dialogVisible = true
      this.form = JSON.parse(JSON.stringify(row))
    },
    dataGet() {
      this.axios
        .get('http://127.0.0.1:8080/stu/getInfoData', {
          headers: {
            //传入登录账号对应的token字段
            Authorization: window.localStorage.getItem('token'),
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
          this.axios
            .post('http://127.0.0.1:8080/stu/editInfoData', this.form, {
              headers: {
                //传入登录账号对应的token字段
                Authorization: window.localStorage.getItem('token'),
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
        this.$refs['form'].resetFields()
        this.dialogVisible = false
      })
    },
    //弹窗关闭触发
    handleClose() {
      this.$refs.form.resetFields()
      this.dialogVisible = false
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