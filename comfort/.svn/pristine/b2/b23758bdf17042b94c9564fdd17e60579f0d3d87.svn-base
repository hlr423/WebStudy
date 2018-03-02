const express = require("express");

// ================================佳文专用分割线===============================
const goodController=require("../controller/goodControllerJW");
// ================================不跟你多bb===============================

//=======================activity模块的引入=======================
const activityController=require("../controller/activitycontroller");

const baibianController=require("../controller/baibiancontroller");

const router = express.Router();


// ================================拦截EJS===============================
router.get("/mytest",function (req,resp) {
    console.log("拦截滑稽");
    let huaji = "滑稽";
    resp.render("test",{username:huaji});
});
router.get("/index",(req,resp)=>{resp.render("index")});

// =============================cookie&session============================
// router.post("/logoCookie.do",userController.cookieUser); // 登陆

// ================================文件上传下载===================================
// 之前的方法都是两个参数  一个是路径   一个是方法
// 现在 post(1、拦截路径 2、调用上传文件模块  3、处理方法)
// router.post("/uploadFile.do",upload.single("myfile"),fileController.uploadFile);
//多文件上传
// router.post("/uploadFiles.do",upload.array("myfiles"),fileController.uploadFiles);
//下载
router.get("/fileDownload.do",function (req, resp) {
    //1.下载文件的路径 2.下载后保存的文件名
    resp.download("./public/uploads/123.sql","123123.sql");
});


//================================短信验证码的获取====================================
//短信发送
// router.post("/sendCode.do",smsController.sendCode);
//短信验证
// router.post("/verifyCode.do",smsController.verifyCode);
//发送邮件
// router.post("/sendMail.do",smsController.sendMail);

// ================================佳文专用分割线===============================
router.get("/goodxx",goodController.getAll);
// ================================不跟你多bb===============================


//============================activity ejs拦截====================================
router.get("/activity.do",activityController.getActivity);
router.get("/activePing.do",activityController.getActivePing);
router.get("/activityphps.do",activityController.activephps);
router.get("/activityspecial.do",activityController.activespecial);
router.get("/activitytrademark.do",activityController.activetrademark);

//用户评论懒加载
router.get("/getLanJiaZai.do",activityController.getLanJiaZai);

router.get("/baibiandingzhi.do",baibianController.baibianyemian);
router.get("/getbaibian.do",baibianController.getbaibian);


module.exports = router;
