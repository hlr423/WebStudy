const dbpool=require("../config/baibianConfig");
const baibianModel={
    getactivity(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from baibian limit 0,12",[],(err,data)=>{
                // console.log(data);
                resolve(data);
            })
        })
    },
    getbb(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from baibian limit 12,16",[],(err,data)=>{
                // console.log(data);
                resolve(data);
            })
        })
    }
};
module.exports=baibianModel;