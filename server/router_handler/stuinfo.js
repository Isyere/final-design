const connection = require('../db_connection')

exports.stuInfo = (req, res) => {
  const sql = `update stuinfo 
               set 
                  key_one = (select max(key_one) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b),
                  key_two = (select max(key_two) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b), 
                  key_three = (select max(key_three) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b),  
                  key_four = (select max(key_four) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b),  
                  key_five = (select max(key_five) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b),  
                  key_six = (select max(key_six) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b),  
                  key_seven = (select max(key_seven) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b),  
                  key_eight = (select max(key_eight) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b),  
                  key_nine = (select max(key_nine) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b), 
                  key_ten = (select max(key_ten) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b), 
                  key_eleven = (select max(key_eleven) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b),  
                  key_twelve = (select max(key_twelve) from (select * from stuinfo where stu_id = ${req.user.username} and year < 5) as b)  
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
  if (newinfo.stu_name || newinfo.stu_class || newinfo.stu_college || newinfo.gpa) {
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
    if (newinfo.gpa) {
      const sql = `update stuinfo set gpa = ? where stu_id = ? and year = 5`
      connection.query(sql, [newinfo.gpa, req.user.username], (err, results) => {
        if (err) {
          return res.cc(err)
        }
      })
      message += ' 平均绩点修改成功！'
    }
  }
  if (newinfo.keyKind !== '' || newinfo.keyTerm !== '' || newinfo.keyValue !== '') {

    if (newinfo.keyKind === '' || newinfo.keyTerm === '' || newinfo.keyValue === '') {
      // 报错
      message += ' 证明申请提交失败！'
      return res.cc(message)
    }

    const sql = `insert into tinfo set ?`
    connection.query(sql, { stu_id: req.user.username, class: req.user.stu_class, keyKind: newinfo.keyKind, keyName: newinfo.keyName, year: newinfo.keyTerm, content: newinfo.keyValue }, (err, results) => {
      if (err) {
        return res.cc(err)
      }
    })
    message += ' 证明申请提交成功！'
  }
  res.cc(message, 0)
}

exports.imageStorage = (req, res) => {
  const url = req.body.imageUrl
  const sql = `update stuinfo set stu_pic = ? where stu_id = ?`
  connection.query(sql, [url, req.user.username], (err, results) => {
    if (err) return res.cc(err)
    res.cc('头像修改成功！', 0)
  })
}

//new
exports.getInfoData = (req, res) => {
  const username = req.query.name
  if (username) {
    const sql2 = `select * from stuinfo where stu_name = ?`
    connection.query(sql2, username, (err, search) => {
      if (err) {
        return res.cc(err)
      }
      res.send({
        status: 0,
        message: '获取学生信息成功！',
        data: search,
      })
    })
  } else {
    const start = req.query.limit * (req.query.page - 1);
    const sql = `select * from stuinfo limit ${start},${req.query.limit}`
    connection.query(sql, (err, results) => {
      if (err) {
        return res.cc(err)
      }
      const sql1 = `select * from stuinfo`
      connection.query(sql1, (err, final) => {
        if (err) {
          return res.cc(err)
        }
        res.send({
          status: 0,
          message: '获取学生信息成功！',
          total: final.length,
          data: results,
        })
      })
    })
  }
}
exports.editInfoData = (req, res) => {
  const edit = req.body
  const sql = `update stuinfo set ? where stu_id = ? and year = ?`
  connection.query(sql, [{
    stu_name: edit.stu_name,
    stu_class: edit.stu_class,
    stu_college: edit.stu_college,
    gpa: edit.gpa,
    key_one: edit.key_one,
    key_two: edit.key_two,
    key_three: edit.key_three,
    key_four: edit.key_four,
    key_five: edit.key_five,
    key_six: edit.key_six,
    key_seven: edit.key_seven,
    key_eight: edit.key_eight,
    key_nine: edit.key_nine,
    key_ten: edit.key_ten,
    key_eleven: edit.key_eleven,
    key_twelve: edit.key_twelve
  }, edit.stu_id, edit.year], (err, results) => {
    if (err) {
      return res.cc(err)
    }
    res.cc('信息修改成功！', 0)
  })
}

exports.getExamine = (req, res) => {
  const id = req.query.stu_id
  if (id) {
    const sql2 = `select * from tinfo where stu_id = ?`
    connection.query(sql2, id, (err, search) => {
      if (err) {
        return res.cc(err)
      }
      res.send({
        status: 0,
        message: '获取申请信息成功！',
        data: search,
      })
    })
  } else {
    const start = req.query.limit * (req.query.page - 1)
    const sql = `select * from tinfo where class >= ? and class <= ? limit ${start},${req.query.limit}`
    connection.query(sql, [req.user.manageclassmin, req.user.manageclassmax], (err, results) => {
      if (err) {
        return res.cc(err)
      }
      const sql1 = `select * from tinfo`
      connection.query(sql1, (err, final) => {
        if (err) {
          return res.cc(err)
        }
        res.send({
          status: 0,
          message: '获取申请信息成功！',
          total: final.length,
          data: results,
        })
      })
    })
  }
}

exports.examineCheck = (req, res) => {
  const keyName = req.query.keyName
  if (keyName) {
    const sql2 = `select * from examinecheck where keyName = ?`
    connection.query(sql2, keyName, (err, search) => {
      if (err) {
        return res.cc(err)
      }
      res.send({
        status: 0,
        message: '查询申请信息成功！',
        data: search,
      })
    })
  } else {
    const start = req.query.limit * (req.query.page - 1)
    const sql = `select * from examinecheck where stu_id = ? limit ${start},${req.query.limit}`
    connection.query(sql, req.user.username, (err, results) => {
      if (err) {
        return res.cc(err)
      }
      const sql1 = `select * from examinecheck`
      connection.query(sql1, (err, final) => {
        if (err) {
          return res.cc(err)
        }
        res.send({
          status: 0,
          message: '查询申请状态成功！',
          total: final.length,
          data: results,
        })
      })
    })
  }
}

exports.examineRefuse = (req, res) => {
  const sql = `insert into examinecheck set ?`
  connection.query(sql, { stu_id: req.body.stu_id, class: req.body.class, keyName: req.body.keyName, keyKind: req.body.keyKind, year: req.body.year, content: req.body.content, status: '申请未通过' }, (err, results) => {
    if (err) {
      return res.cc(err)
    }
    const sql1 = `delete from tinfo where id = ?`
    connection.query(sql1, req.body.id, (err, results) => {
      res.send({
        status: 0,
        message: '申请拒绝操作成功！',
        data: results,
      })
    })
  })
}

exports.examineAgree = (req, res) => {

  const sql = `update stuinfo set ${req.body.keyKind} = ${req.body.keyKind} + 25.0 where stu_id = ? and year = ?`
  console.log(sql);
  connection.query(sql, [req.body.username, req.body.keyTerm], (err, results) => {
    if (err) {
      return res.cc(err)
    }
    // const sql1 = `delete from tinfo where id = ?`
    // connection.query(sql1, req.body.id, (err, results) => {
    res.send({
      status: 0,
      message: '申请同意操作成功！',
      data: results,
    })
  })
  // })
}
