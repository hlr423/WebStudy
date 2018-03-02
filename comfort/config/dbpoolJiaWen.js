const mysql = require("mysql");
const dbpool = {
    pool:{},
    config:{
        host:"localhost",
        port:"3306",
        user:"root",
        password:"root",
        database:"comfort"
    },
    create(){
        console.log("创建链接池");
        this.pool = mysql.createPool(this.config);
    },
    connect(sql,arr,fn){ // 封装一个方法
        this.pool.getConnection((err,connection)=>{ // 从链接池中获取一个链接
            //发起query
            connection.query(sql,arr,fn);
            //释放链接
            connection.release();
        })
    }

};
dbpool.create();//自动创建链接池
module.exports = dbpool; //公开链接池
