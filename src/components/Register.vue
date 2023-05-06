<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    ref="ruleForm"
    class="demo-ruleForm"
    @submit.native.prevent="submitForm"
  >
    <el-form-item label="" prop="username"
      ><el-input
        type="text"
        autocomplete="off"
        v-model="ruleForm.username"
        prefix-icon="el-icon-user-solid"
        placeholder="请输入学号"
        clearable
      ></el-input
    ></el-form-item>
    <el-form-item label="" prop="name"
      ><el-input
        type="text"
        autocomplete="off"
        v-model="ruleForm.name"
        prefix-icon="el-icon-user-solid"
        placeholder="请输入姓名"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item label="" prop="password"
      ><el-input
        type="password"
        autocomplete="off"
        v-model="ruleForm.password"
        prefix-icon="el-icon-lock"
        placeholder="请输入密码"
        clearable
      ></el-input
    ></el-form-item>
    <el-form-item label="" prop="checkPass"
      ><el-input
        type="password"
        autocomplete="off"
        v-model="ruleForm.checkPass"
        prefix-icon="el-icon-lock"
        placeholder="请输入密码"
        clearable
      ></el-input
    ></el-form-item>
    <el-form-item class="btns">
      <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
 
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }

    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }

    return {
      activeName: 'second',
      ruleForm: {
        name: '',
        username: '',
        password: '',
        checkPass: ''
      },
      rules: {
        name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
        username: [
          { required: true, message: '请输入您的学号', trigger: 'blur' },
          { min: 8, max: 8, message: '长度8个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.axios
            .post('http://127.0.0.1:8080/api/register', this.ruleForm, {
              headers: {
                'Content-Type':
                  'application/x-www-form-urlencoded;charset=utf-8'
              }
            })
            .then((res) => {
              this.$message({
                type: res.data.status ? 'error' : 'success',
                message: res.data.message
              })
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },

    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="less" scoped>
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>