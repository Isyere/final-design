const connection = require('../db_connection')
fs = require("fs");

exports.uploading = (req, res) => {
  let oldName = req.files[0].filename;//获取名字
  let originalname = req.files[0].originalname;//originnalname其实就是你上传时候文件起的名字
  //给新名字加上原来的后缀
  let newName = req.files[0].originalname;
  fs.renameSync('./public/upload/' + oldName, './public/upload/' + newName);//改图片的名字注意此处一定是一个路径，而不是只有文件名
  res.send({
    err: 0,
    url: "http://127.0.0.1:8080/" +
      newName
  });
}

