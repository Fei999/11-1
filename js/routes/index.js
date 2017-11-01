var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  port:3307
});

/* GET home page. */
//post发送+请求get获取
router.post('/list', function(req, res, next) {
    //通过SELECT拿到的数据rows形参
    res.header('Access-Control-Allow-Origin','*');
    var id=req.body.id;
    connection.query(`SELECT * FROM body.ss WHERE name LIKE '%${id}%' OR detail LIKE '%${id}%'`, function(err, rows, fields) { 
        res.send(rows)
    });
});
module.exports = router;
