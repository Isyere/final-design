const connection = require('../db_connection')

exports.stuInfo = (req, res) => {
  const sql = `update stuinfo 
               set 
                  key_one = (select max(key_one) from (select * from stuinfo ) as b),
                  key_two = (select max(key_two) from (select * from stuinfo ) as b), 
                  key_three = (select max(key_three) from (select * from stuinfo ) as b),  
                  key_four = (select max(key_four) from (select * from stuinfo ) as b),  
                  key_five = (select max(key_five) from (select * from stuinfo ) as b),  
                  key_six = (select max(key_six) from (select * from stuinfo ) as b),  
                  key_seven = (select max(key_seven) from (select * from stuinfo ) as b),  
                  key_eight = (select max(key_eight) from (select * from stuinfo ) as b),  
                  key_nine = (select max(key_nine) from (select * from stuinfo ) as b), 
                  key_ten = (select max(key_ten) from (select * from stuinfo ) as b), 
                  key_eleven = (select max(key_eleven) from (select * from stuinfo ) as b),  
                  key_twelve = (select max(key_twelve) from (select * from stuinfo ) as b)  
               where stu_id = ? and year = 5`
  connection.query(sql, req.user.username, (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err) return res.cc(err)
    const sql2 = `select * from stuinfo where stu_id = ? and year = 5`
    connection.query(sql2, req.user.username, (err, back) => {
      // 1. 执行 SQL 语句失败
      if (err) return res.cc(err)
      // 2. 将用户信息响应给客户端
      res.send({
        status: 0,
        message: '获取用户基本信息成功！',
        data: back,
      })
    })
  })
}

exports.stuEcharts = (req, res) => {
  const sql = `select * from stuinfo where stu_id=? and year < 5`
  connection.query(sql, req.user.username, (err, results) => {
    // 1. 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 2. 将用户信息响应给客户端
    res.send({
      status: 0,
      message: '获取用户基本信息成功！',
      data: results,
    })
  })
}

exports.infoChange = (req, res) => {
  const newinfo = req.body
  var message = ''
  if (newinfo.stu_name || newinfo.stu_class || newinfo.stu_college) {
    if (newinfo.stu_name) {
      // 执行mysql插入
      const sql = `update stuinfo set stu_name = ? where stu_id = ?`
      connection.query(sql, [newinfo.stu_name, req.user.username], (err, results) => {
        if (err) {
          return res.cc(err)
        }
      })
      message += ' 姓名修改成功！'
    }
    if (newinfo.stu_class) {
      const sql = `update stuinfo set stu_class = ? where stu_id = ?`
      connection.query(sql, [newinfo.stu_class, req.user.username], (err, results) => {
        if (err) {
          return res.cc(err)
        }
      })
      message += ' 班级修改成功！'
    }
    if (newinfo.stu_college) {
      const sql = `update stuinfo set stu_college = ? where stu_id = ?`
      connection.query(sql, [newinfo.stu_college, req.user.username], (err, results) => {
        if (err) {
          return res.cc(err)
        }
      })
      message += ' 学院修改成功！'
    }
  }
  if (newinfo.keyKind !== '' || newinfo.keyTerm !== '' || newinfo.keyValue !== '') {

    if (newinfo.keyKind === '' || newinfo.keyTerm === '' || newinfo.keyValue === '') {
      // 报错
      message += ' 证明添加失败！'
      return res.cc(message)
    }
    const sql = `update stuinfo set ${newinfo.keyKind} = ? where stu_id = ? and year = ?`
    connection.query(sql, [newinfo.keyValue, req.user.username, newinfo.keyTerm], (err, results) => {
      if (err) {
        return res.cc(err)
      }

    })
    message += ' 证明添加成功！'
    return res.cc(message, 0)
  }
}

exports.imageStorage = (req, res) => {
  const url = req.body.imageUrl
  console.log(req.body);
  const sql = `update stuinfo set stu_pic = ? where stu_id = ?`
  connection.query(sql, [url, req.user.username], (err, results) => {
    if (err) return res.cc(err)
    res.cc('头像修改成功！', 0)
  })
}
