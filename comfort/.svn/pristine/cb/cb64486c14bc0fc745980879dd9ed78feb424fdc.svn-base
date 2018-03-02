// const dbpool=require("../config/dbpoolConfig");
const dbpool=require("../config/dbpoolJiaWen");
const activityModel={
    getactivity(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from activity",[],(err,data)=>{
                resolve(data);
                // console.log(data)
            })
        })
    },
    getActivePing(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select  comment.*,u_img,u_name,a_sheng from ((details inner join comment on details.c_id=comment.c_id)inner join user on details.u_id=user.u_id ) inner join address on details.a_id=address.a_id limit 0,5",
                [],(err,data)=>{
                resolve(data);
                console.log(data);
                })
        })
    },
    acphps(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from phystore",
                [],(err,data)=>{
                    resolve(data);
                    console.log(data);
                })
        })
    },
    acspecial(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from special",
                [],(err,data)=>{
                    resolve(data);
                    console.log(data);
                })
        })
    },
    actrademark(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select * from trademark",
                [],(err,data)=>{
                    resolve(data);
                    console.log(data);
                })
        })
    },
    LanJiaZai(){
        return new Promise((resolve,reject)=>{
            dbpool.connect("select  comment.*,u_img,u_name,a_sheng from ((details inner join comment on details.c_id=comment.c_id)inner join user on details.u_id=user.u_id ) inner join address on details.a_id=address.a_id limit 3,6",
                [],(err,data)=>{
                    resolve(data);
                    console.log("lanren:"+data);
                })
        })
    }


};
module.exports=activityModel;
