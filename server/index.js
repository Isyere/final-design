const express = require('express')

const cors = require('cors')

const multer = require('multer')

const app = express()



// 导入配置文件
const config = require('./config')

// 解析 token 的中间件
const expressJWT = require('express-jwt')

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证


app.use(cors())

let objMulter = multer({
  dest: "./public/upload",
  fileFilter(req, file, callback) {
    // 解决中文名乱码的问题
    file.originalname = Buffer.from(file.originalname, "latin1").toString(
      "utf8"
    );
    callback(null, true);
  }
});
//实例化multer，传递的参数对象，dest表示上传文件的存储路径
app.use(objMulter.any())//any表示任意类型的文件
// app.use(objMulter.image())//仅允许上传图片类型

app.use(express.static("./public/upload"));//将静态资源托管，这样才能在浏览器上直接访问预览图片或则html页面

app.use(express.urlencoded({ extended: false }))


// 响应数据的中间件
app.use(function (req, res, next) {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

app.use(expressJWT({ secret: config.jwtSecretKey, algorithms: ["HS256"], }).unless({ path: [/^\/api\//] }))
const userRouter = require('./router/userRouter')
const stuinfoRouter = require('./router/stuinfoRouter')
const uploadingRouter = require('./router/uploadingRouter')
app.use('/api', userRouter)
app.use('/stu', stuinfoRouter)
app.use('/api', uploadingRouter)

const joi = require('joi')
app.use(function (err, req, res, next) {
  // 数据验证失败
  if (err instanceof joi.ValidationError) return res.cc(err)
  // 捕获身份认证失败的错误
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  // 未知错误
  res.cc(err)
})





app.listen(8080, () => {
  console.log("Express server running at http://127.0.0.1:8080");
})

