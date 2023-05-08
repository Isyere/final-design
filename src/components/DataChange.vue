<template>
  <div class="infoChangeBox">
    <h2>个人信息修改</h2>
    <el-row :gutter="20">
      <el-col :span="21">
        <div class="grid-content">
          头像上传：
          <el-upload
            class="avatar-uploader"
            action="http://127.0.0.1:8080/api/uploading"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="picUrl.imageUrl" :src="picUrl.imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="7">
        <div class="grid-content">
          <span>
            姓名：
            <el-input
              placeholder="请输入姓名"
              v-model="stuData.stu_name"
              clearable
            >
            </el-input>
          </span>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content">
          <span>
            班级：<el-input
              placeholder="请输入班级"
              v-model="stuData.stu_class"
              clearable
            >
            </el-input>
          </span>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="grid-content">
          <span>
            学院：<el-input
              placeholder="请输入学院"
              v-model="stuData.stu_college"
              clearable
            >
            </el-input>
          </span>
        </div>
      </el-col>
    </el-row>
    <hr />
    <h2>证明添加</h2>
    <el-row :gutter="20">
      <el-col :span="7">
        <div class="grid-content">
          类别：
          <el-select
            v-model="stuData.keyKind"
            clearable
            placeholder="请选择"
            size="medium"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :span="7"
        ><div class="grid-content">
          学期：
          <el-select
            v-model="stuData.keyTerm"
            clearable
            placeholder="请选择"
            size="medium"
          >
            <el-option
              v-for="item in year"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select></div
      ></el-col>
      <el-col :span="8">
        <div class="grid-content">
          内容:
          <el-input
            placeholder="请输入内容"
            v-model="stuData.keyValue"
            clearable
          >
          </el-input>
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
      stuData: {
        stu_name: '',
        stu_class: '',
        stu_college: '',
        keyKind: '',
        keyTerm: '',
        keyValue: ''
      },
      year: [
        {
          value: '1',
          label: '第一学年'
        },
        {
          value: '2',
          label: '第二学年'
        },
        {
          value: '3',
          label: '第三学年'
        },
        {
          value: '4',
          label: '第四学年'
        }
      ],
      options: [
        {
          value: 'key_one',
          label: '学习态度与学习能力'
        },
        {
          value: 'key_two',
          label: '多元文化与国际视野'
        },
        {
          value: 'key_three',
          label: '规划执行与逻辑思辨'
        },
        {
          value: 'key_four',
          label: '劳动观念与劳动技能'
        },
        {
          value: 'key_five',
          label: '道德实践与家国情怀'
        },
        {
          value: 'key_six',
          label: '身心素养与自我管理'
        },
        {
          value: 'key_seven',
          label: '诚实守信与奉献精神'
        },
        {
          value: 'key_eight',
          label: '艺术涵养与美感素养'
        },
        {
          value: 'key_nine',
          label: '分析问题与系统思考'
        },
        {
          value: 'key_ten',
          label: '人际关系与团队合作'
        },
        {
          value: 'key_eleven',
          label: '创新实践与核心素养'
        },
        {
          value: 'key_twelve',
          label: '工具使用与内涵建设'
        }
      ]
    }
  },
  methods: {
    dataPost() {
      this.axios
        .post('http://127.0.0.1:8080/stu/infoChange', this.stuData, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: window.localStorage.getItem('token')
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
        .post('http://127.0.0.1:8080/stu/imageStorage', this.picUrl, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: window.localStorage.getItem('token')
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
  top: 10%;
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


