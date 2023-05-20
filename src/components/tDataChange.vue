<template>
  <div class="infoChangeBox">
    <h2>个人信息修改</h2>
    <hr />
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content">
          头像上传：
          <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:8080/api/uploading"
            accept=".jpg, .jpeg, .JPG, .JPEG "
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="picUrl.imageUrl" :src="picUrl.imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <span>
            姓名：
            <el-input
              placeholder="请输入姓名"
              v-model="tData.username"
              clearable
            >
            </el-input>
          </span>
        </div>
      </el-col>
      <el-col :span="2">
        <div class="grid-content">
          <el-button type="primary" @click="dataPost">提交</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      picUrl: {
        imageUrl: ''
      },
      tData: {
        username: ''
      }
    }
  },
  methods: {
    dataPost() {
      this.axios
        .post('http://127.0.0.1:8080/t/infoChange', this.tData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: window.localStorage.getItem('tToken')
          }
        })
        .then((res) => {
          this.$message({
            type: res.data.status ? 'error' : 'success',
            message: res.data.message
          })
        })
    },
    handleAvatarSuccess(res, file) {
      this.picUrl.imageUrl = res.url
      this.axios
        .post('http://127.0.0.1:8080/t/imageStorage', this.picUrl, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: window.localStorage.getItem('tToken')
          }
        })
        .then((res) => {
          this.$message({
            type: res.data.status ? 'error' : 'success',
            message: res.data.message
          })
        })
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style lang='less' scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.infoChangeBox {
  position: relative;
  top: 5%;
  left: 20%;
  width: 60%;
}
.el-input {
  width: 200px;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>


