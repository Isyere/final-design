const connection = require('../db_connection')

exports.newTAccount = (req, res) => {
  const newAccount = req.body
  const sql = `insert into taccount set ?`
  connection.query(sql, { username: newAccount.username, t_name: newAccount.t_name, t_password: newAccount.t_password, manageclassmin: newAccount.manageclassmin, manageclassmax: newAccount.manageclassmax, sex: newAccount.sex }, (err, results) => {
    if (err) {
      return res.cc(err)
    }
  })
  res.cc("新辅导员账号添加成功！", 0)
}
exports.getAccountData = (req, res) => {
  const username = req.query.name
  if (username) {
    const sql2 = `select * from taccount where username = ?`
    connection.query(sql2, username, (err, search) => {
      if (err) {
        return res.cc(err)
      }
      res.send({
        status: 0,
        message: '获取辅导员账号信息成功！',
        data: search,
      })
    })
  } else {
    const start = req.query.limit * (req.query.page - 1);
    const sql = `select * from taccount limit ${start},${req.query.limit}`
    connection.query(sql, (err, results) => {
      if (err) {
        return res.cc(err)
      }
      const sql1 = `select * from taccount`
      connection.query(sql1, (err, final) => {
        if (err) {
          return res.cc(err)
        }
        res.send({
          status: 0,
          message: '获取辅导员账号信息成功！',
          total: final.length,
          data: results,
        })
      })
    })
  }

}
exports.editTAccount = (req, res) => {
  const newAccount = req.body
  const sql = `update taccount set ? where t_name = ?`
  connection.query(sql, [{ username: newAccount.username, t_password: newAccount.t_password, manageclassmin: newAccount.manageclassmin, manageclassmax: newAccount.manageclassmax, sex: newAccount.sex }, req.body.t_name], (err, results) => {
    if (err) {
      return res.cc(err)
    }
    res.cc('信息修改成功！', 0)
  })
}

exports.deleteTAccount = (req, res) => {
  const sql = `delete from taccount where t_name = ?`
  connection.query(sql, req.body.t_name, (err, results) => {
    if (err) {
      return res.cc(err)
    }
    res.cc('删除成功！', 0)
  })
}