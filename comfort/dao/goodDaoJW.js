const dbpool=require("../config/dbpoolJiaWen");
const goodModel={
    gete_name(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select e_name from t_good where good_id=1",
            params,(err,data)=>{
                if(!err){
                    // console.log(data)
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getc_name(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select c_name from t_good where good_id=1",
            params,(err,data)=>{
                if(!err){
                    // console.log(data)
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    gettdd_pic(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select pic_lujin from tdd_pic where good_id=1 and style_id=1",
            params,(err,data)=>{
                if(!err){
                    // console.log(data)
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getprice(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select price from tg_swp where good_id=1 and style_id=1",
            params,(err,data)=>{
                if(!err){
                    // console.log(data)
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getcolorImg(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT * FROM t_color AS a  JOIN tg_color AS b  ON a.color_id=b.color_id WHERE good_id=1 ",
            params,(err,data)=>{
                if(!err){
                    // console.log(data)
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getstyle(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("select * from t_style as a join tg_swp as b on a.style_id=b.style_id where good_id=1",
            params,(err,data)=>{
                if(!err){
                    // console.log(data)
                    resolve(data);
                }else{
                    reject(err);
                }
            })
        })
    },
    getDesigner(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_lujin FROM tgx_pic WHERE pic_name LIKE '%_designer%' AND good_id=1",
                params,(err,data)=>{
                    if(!err){
                        // console.log(data)
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getaRow(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT e_style FROM t_style AS a JOIN tg_swp AS b ON a.style_id=b.style_id WHERE good_id=1 LIMIT 1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getaRow1(params){
        // console.log("222")
        // console.log(params)
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_lujin FROM tgx_pic WHERE pic_name LIKE ?",
                params,(err,data)=>{
                    if(!err){
                        // console.log(data)
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getbRowData(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_lujin FROM tgx_pic WHERE pic_name LIKE '%_b'",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getshowx(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_lujin FROM tgx_pic WHERE good_id=1 AND pic_name LIKE '%_show_%'",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getsceney(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT pic_lujin FROM tgx_pic WHERE good_id=1 AND pic_name LIKE '%_scene_%'",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getweight(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT weight FROM t_weight as a join t_more as b on a.weight_id=b.weight_id WHERE good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getmaterial(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT material FROM t_material as a join t_more as b on a.material_id=b.material_id WHERE good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getcoating(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT coating FROM t_coating as a join t_more as b on a.coating_id=b.coating_id WHERE good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getrule(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT rule FROM t_rule as a join t_more as b on a.rule_id=b.rule_id WHERE good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getaz(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT az FROM t_az as a join t_more as b on a.az_id=b.az_id WHERE good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getother(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT other FROM t_other as a join t_more as b on a.other_id=b.other_id WHERE good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getweihu(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT weihu FROM t_weihu as a join t_more as b on a.weihu_id=b.weihu_id WHERE good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getclean(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT clean FROM t_clean as a join t_more as b on a.clean_id=b.clean_id WHERE good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getmfrs(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT mfrs FROM t_more WHERE good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    },
    getpsfs(params){
        return new Promise(function(resolve,reject){
            dbpool.connect("SELECT psfs FROM t_more WHERE good_id=1",
                params,(err,data)=>{
                    if(!err){
                        resolve(data);
                    }else{
                        reject(err);
                    }
                })
        })
    }
};
module.exports= goodModel;
