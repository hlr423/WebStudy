const baibianDao=require("../dao/baibianDao");
const baibianss= {
    baibianyemian(request,response){
        baibianDao.getactivity().then(function (data) {
            response.render("baibian",{baibian:data})
        })
    },
    getbaibian(request,response){
        baibianDao.getbb().then(function (data) {
            console.log("contr:"+data)
            response.send(data);
        })
    }
};
module.exports=baibianss;