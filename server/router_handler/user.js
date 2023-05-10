const connection = require('../db_connection')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.tLogin = (req, res) => {
  const userinfo = req.body
  const sql = `select * from taccount where t_name=?`
  connection.query(sql, userinfo.username, function (err, results) {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1
    if (results.length !== 1) return res.cc('登录失败！')
    // 如果对比的结果等于 false, 则证明用户输入的密码错误
    if (userinfo.password !== results[0].t_password) {
      return res.cc('登录失败！')
    }
    const user = { ...results[0], password: '' }
    // 生成 Token 字符串
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: '10h', // token 有效期为 10 个小时
    })
    res.send({
      status: 0,
      message: '导员端登录成功！',
      // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
      token: 'Bearer ' + tokenStr,
    })
  })
}

exports.aLogin = (req, res) => {
  const userinfo = req.body
  const sql = `select * from superaccount where username=?`
  connection.query(sql, userinfo.username, function (err, results) {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1
    if (results.length !== 1) return res.cc('登录失败！')
    // 如果对比的结果等于 false, 则证明用户输入的密码错误

    if (userinfo.password !== results[0].password) {
      return res.cc('登录失败！')
    }
    const user = { ...results[0], password: '' }
    // 生成 Token 字符串
    const tokenStr = jwt.sign(user, config.jwtSecretKey, {
      expiresIn: '10h', // token 有效期为 10 个小时
    })
    res.send({
      status: 0,
      message: '超级管理员登录成功！',
      // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
      token: 'Bearer ' + tokenStr,
    })
  })
}

exports.login = (req, res) => {
  const userinfo = req.body
  const sql = `select * from account where username=?`
  connection.query(sql, userinfo.username, function (err, results) {
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1
    if (results.length !== 1) return res.cc('登录失败！')
    // 拿着用户输入的密码,和数据库中存储的密码进行对比
    const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)

    // 如果对比的结果等于 false, 则证明用户输入的密码错误
    if (!compareResult) {
      return res.cc('登录失败！')
    }
    const sql1 = `select stu_class from stuinfo where stu_id=?`
    connection.query(sql1, userinfo.username, function (err, back) {
      const user = { ...results[0], ...back[0], password: '' }
      // 生成 Token 字符串
      const tokenStr = jwt.sign(user, config.jwtSecretKey, {
        expiresIn: '10h', // token 有效期为 10 个小时
      })
      res.send({
        status: 0,
        message: '登录成功！',
        // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
        token: 'Bearer ' + tokenStr,
      })
    })
  })
}

exports.register = (req, res) => {
  const accountInfo = req.body
  if (!accountInfo.username || !accountInfo.password) {
    return res.cc('用户名或密码不能为空！')
  }

  const sql1 = `select * from account where username=?`
  connection.query(sql1, [accountInfo.username], function (err, results) {
    if (err) {
      return res.cc(err.message)
    }
    if (results.length > 0) {
      return res.cc('用户名被占用，请更换其他用户名！')
    }
    //密码加密
    accountInfo.password = bcrypt.hashSync(accountInfo.password, 10)
    //密码写入数据库
    const sql2 = 'insert into account set ?'
    connection.query(sql2, { username: accountInfo.username, password: accountInfo.password }, function (err, results) {
      if (err) return res.cc(err.message)
      if (results.affectedRows !== 1) {
        return res.cc('注册用户失败，请稍后再试！')
      }
      //注册成功后自动新增五条学生表信息（四个学年+总结）
      const sql3 = `insert into stuinfo(stu_id,stu_name,year) VALUES (?,?,?)`
      connection.query(sql3, [accountInfo.username, accountInfo.name, 1], function (err, results) {
        if (err) return res.cc(err.message)
      })
      connection.query(sql3, [accountInfo.username, accountInfo.name, 2], function (err, results) {
        if (err) return res.cc(err.message)
      })
      connection.query(sql3, [accountInfo.username, accountInfo.name, 3], function (err, results) {
        if (err) return res.cc(err.message)
      })
      connection.query(sql3, [accountInfo.username, accountInfo.name, 4], function (err, results) {
        if (err) return res.cc(err.message)
      })
      connection.query(sql3, [accountInfo.username, accountInfo.name, 5], function (err, results) {
        if (err) return res.cc(err.message)
      })
      res.cc('注册成功！', 0)
    })

  })
}