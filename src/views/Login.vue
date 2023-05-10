<template>
  <div class="login">
    <div class="login_form">
      <p>学生综合素质管理系统</p>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="登录" name="first">
          <el-form :model="loginForm" :rules="rules" ref="loginForm">
            <el-form-item label="" prop="username" class="elItem">
              <el-input
                type="text"
                autocomplete="off"
                v-model="loginForm.username"
                prefix-icon="el-icon-user-solid"
                placeholder="请输入账号"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input
                type="password"
                autocomplete="off"
                v-model="loginForm.password"
                prefix-icon="el-icon-lock"
                placeholder="请输入密码"
                clearable
              ></el-input>
            </el-form-item>
            <el-form-item class="btns">
              <el-button type="primary" @click="goToLogin">登录</el-button>
              <el-button @click="resetLoginForm">重置</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="注册" name="second">
          <!-- 注册组件 -->
          <register></register>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
//引入注册组件
import register from '@/components/Register'
export default {
  data() {
    // 定义表单规则
    var validateAccount = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('账号不能为空'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      name: 'l-login',
      loginForm: {
        username: '',
        password: ''
      },
      activeName: 'first', //默认显示登录页面
      rules: {
        username: [
          {
            validator: validateAccount,
            trigger: 'blur'
          }
        ],
        password: [
          {
            validator: validatePassword,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    goToLogin() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          if (this.loginForm.username === 'admin') {
            this.axios
              .post('http://127.0.0.1:8080/api/alogin', this.loginForm, {
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
                if (!res.data.status) {
                  window.localStorage.setItem('token', res.data.token)
                  this.$router.push('/amain')
                }
              })
          } else if (this.loginForm.username < 50000001) {
            this.axios
              .post('http://127.0.0.1:8080/api/login', this.loginForm, {
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
                if (!res.data.status) {
                  window.localStorage.setItem('token', res.data.token)
                  this.$router.push('/main')
                }
              })
          } else {
            this.axios
              .post('http://127.0.0.1:8080/api/tLogin', this.loginForm, {
                headers: {
                  'Content-Type':
                    'application/x-www-form-urlencoded;charset=utf-8'
                }
              })
              .then((res) => {
                console.log(res)
                this.$message({
                  type: res.data.status ? 'error' : 'success',
                  message: res.data.message
                })
                if (!res.data.status) {
                  window.localStorage.setItem('token', res.data.token)
                  this.$router.push('/tmain')
                }
              })
          }
        } else {
          this.$message.error('登陆失败')
          return false
        }
      })
    },
    resetLoginForm() {
      this.$refs['loginForm'].resetFields()
    },
    handleClick() {}
  },
  components: {
    register
  }
}
</script>

<style scoped lang='less'>
.login {
  width: 100%;
  height: 100vh;
  background-image: url('../pic/login.jpeg'); //背景图
  background-size: 100% 100%;
  background-position: center center;
  overflow: auto;
  position: relative;
  .login_form {
    width: 400px;
    height: 420px;
    position: absolute;
    left: 50%;
    top: 45%;
    margin-left: -200px;
    margin-top: -150px;
    padding: 10px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px #ddd;
    .btns {
      display: flex;
      justify-content: flex-end;
    }
  }
  p {
    font-size: 24px;
    text-align: center;
    font-weight: 600;
  }
}
</style>
