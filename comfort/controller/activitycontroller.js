
const acDao=require("../dao/activityDao");
const activityModel= {
    getActivity(request,response){
        acDao.getactivity()
            .then(function (data) {
                console.log(data);
                response.render("activity",{mydata:data})

            })
    },
    getActivePing(request,response){
        acDao.getActivePing()
            .then(function (data) {
                 response.render("activityPing",{PingData:data})
            })
    },
    activephps(request,response){
        acDao.acphps()
            .then(function (data) {
                response.render("activityphps",{hphsData:data});
                console.log(data)
            })
    },
    activespecial(request,response){
        acDao.acspecial()
            .then(function (data) {
                response.render("activityspecial",{spData:data});
                console.log(data)
            })
    },
    activetrademark(request,response){
        acDao.actrademark()
            .then(function (data) {
                response.render("activitytrademark",{tmData:data});
                console.log(data)
            })
    },
    getLanJiaZai(request,response){

        // let  itemNum=request.query.itemNum;
        // console.log("itemNum"+itemNum);
        acDao.LanJiaZai()
            .then(function (data) {
            response.send(data);
                console.log("contro:"+data)
            })
    }


};
module.exports=activityModel;