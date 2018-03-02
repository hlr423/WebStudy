/*gulp配置及任务语法
* gulp.task(1.任务名称 2.任务回调函数)*/
const gulp=require("gulp");
const clean=require("gulp-clean");

/*1.task() 定任务
* 2.src() 源头文件
* 3.pipe() 管道流
* 4.dest() 输出文件的目的地*/
/*====================HTML========================*/
gulp.task("copyHtml",function () {
    return gulp.src("./src/pages/*.html").pipe(gulp.dest("dist/pages"));
});
// 复制AfterSales 中的html
gulp.task("copyAfterSalesHtml",function () {
    return gulp.src("./src/pages/AfterSales/*.html").pipe(gulp.dest("dist/pages/AfterSales"));
});

/*====================CSS========================*/
gulp.task("copyCss",function () {
    return gulp.src("./src/css/*.css").pipe(gulp.dest("dist/css"));
});
gulp.task("copyActiveCSSCss",function () {
    return gulp.src("./src/css/activeCSS/*.css").pipe(gulp.dest("dist/css/activeCSS"));
});
gulp.task("copyAfterSalesCss",function () {
    return gulp.src("./src/css/AfterSales/*.css").pipe(gulp.dest("dist/css/AfterSales"));
});
gulp.task("copyButtonCssCss",function () {
    return gulp.src("./src/css/buttoncss/*.css").pipe(gulp.dest("dist/css/buttoncss"));
});
gulp.task("copyDingzhiCss",function () {
    return gulp.src("./src/css/dingzhi/*.css").pipe(gulp.dest("dist/css/dingzhi"));
});
gulp.task("copyLoginCssCss",function () {
    return gulp.src("./src/css/loginCss/*.css").pipe(gulp.dest("dist/css/loginCss"));
});
gulp.task("copyNavCss",function () {
    return gulp.src("./src/css/nav/*.css").pipe(gulp.dest("dist/css/nav"));
});
gulp.task("copyPersonCss",function () {
    return gulp.src("./src/css/person/*.css").pipe(gulp.dest("dist/css/person"));
});
gulp.task("copyPersonalPagesCss",function () {
    return gulp.src("./src/css/PersonalPages/*.css").pipe(gulp.dest("dist/css/PersonalPages"));
});

/*====================JS========================*/
gulp.task("copyJs",function () {
    return gulp.src("./src/js/*.js").pipe(gulp.dest("dist/js"));
});
gulp.task("copyActiveJSJs",function () {
    return gulp.src("./src/js/activeJS/*.js").pipe(gulp.dest("dist/js/activeJS"));
});
gulp.task("copyDingzhiJs",function () {
    return gulp.src("./src/js/dingzhi/*.js").pipe(gulp.dest("dist/js/dingzhi"));
});
gulp.task("copyNavJs",function () {
    return gulp.src("./src/js/nav/*.js").pipe(gulp.dest("dist/js/nav"));
});
gulp.task("copyPersonJs",function () {
    return gulp.src("./src/js/person/*.js").pipe(gulp.dest("dist/js/person"));
});

/*====================img========================*/
gulp.task("copyImg",function () {
    return gulp.src("./src/images/*.{jpg,png}").pipe(gulp.dest("dist/images"));
});
gulp.task("copyActiveGoodsImg",function () {
    return gulp.src("./src/images/activeGoods/*.{jpg,png}").pipe(gulp.dest("dist/images/activeGoods"));
});
gulp.task("copyActiveImgImg",function () {
    return gulp.src("./src/images/activeImg/*.{jpg,png}").pipe(gulp.dest("dist/images/activeImg"));
});
gulp.task("copyAp1Img",function () {
    return gulp.src("./src/images/ap1/*.{jpg,png}").pipe(gulp.dest("dist/images/ap1"));
});
gulp.task("copyAz1Img",function () {
    return gulp.src("./src/images/za1/*.{jpg,png}").pipe(gulp.dest("dist/images/za1"));
});
gulp.task("copyCofalImg",function () {
    return gulp.src("./src/images/Cofal/*.{jpg,png}").pipe(gulp.dest("dist/images/Cofal"));
});
gulp.task("copyColorImgImg",function () {
    return gulp.src("./src/images/colorImg/*.{jpg,png}").pipe(gulp.dest("dist/images/colorImg"));
});
gulp.task("copyDingzhiImg",function () {
    return gulp.src("./src/images/dingzhi/*.{jpg,png}").pipe(gulp.dest("dist/images/dingzhi"));
});
gulp.task("copyHarp_picImg",function () {
    return gulp.src("./src/images/harp_pic/*.{jpg,png}").pipe(gulp.dest("dist/images/harp_pic"));
});
gulp.task("copyHuiyuanImg",function () {
    return gulp.src("./src/images/huiyuan/*.{jpg,png}").pipe(gulp.dest("dist/images/huiyuan"));
});
gulp.task("copyIndexImg",function () {
    return gulp.src("./src/images/index/*.{jpg,png}").pipe(gulp.dest("dist/images/index"));
});
gulp.task("copyLjImg",function () {
    return gulp.src("./src/images/lj/*.{jpg,png}").pipe(gulp.dest("dist/images/lj"));
});
gulp.task("copyLoginImg",function () {
    return gulp.src("./src/images/login/*.{jpg,png}").pipe(gulp.dest("dist/images/login"));
});
gulp.task("copyNavImg",function () {
    return gulp.src("./src/images/nav/*.{jpg,png}").pipe(gulp.dest("dist/images/nav"));
});
gulp.task("copyPerson-memberImg",function () {
    return gulp.src("./src/images/person-member/*.{jpg,png}").pipe(gulp.dest("dist/images/person-member"));
});
gulp.task("copyPhps_imgImg",function () {
    return gulp.src("./src/images/phps_img/*.{jpg,png}").pipe(gulp.dest("dist/images/phps_img"));
});
gulp.task("copyShowImgImg",function () {
    return gulp.src("./src/images/showImg/*.{jpg,png}").pipe(gulp.dest("dist/images/showImg"));
});
gulp.task("copySofa_picImg",function () {
    return gulp.src("./src/images/sofa_pic/*.{jpg,png}").pipe(gulp.dest("dist/images/sofa_pic"));
});
gulp.task("copySp_imgImg",function () {
    return gulp.src("./src/images/sp_img/*.{jpg,png}").pipe(gulp.dest("dist/images/sp_img"));
});
gulp.task("copyTm_imgImg",function () {
    return gulp.src("./src/images/tm_img/*.{jpg,png}").pipe(gulp.dest("dist/images/tm_img"));
});

/*====================fonts========================*/
gulp.task("copyFonts",function () {
    return gulp.src("./src/fonts/*.{html,css,eot,js,svg,ttf,woff}").pipe(gulp.dest("dist/fonts"));
});
gulp.task("copyLoginCssFonts",function () {
    return gulp.src("./src/css/loginCss/fonts/*.{otf,eot,svg,ttf,woff,woff2}").pipe(gulp.dest("dist/css/loginCss/fonts"));
});
gulp.task("copyNavFonts",function () {
    return gulp.src("./src/css/nav/fonts/*.{css,eot,svg,ttf,woff}").pipe(gulp.dest("dist/css/nav/fonts"));
});

/*=====================bootstrap=======================*/
gulp.task("copyBootstrapCss",function () {
    return gulp.src("./src/bootstrap-3.3.7-dist/css/*.css").pipe(gulp.dest("dist/bootstrap-3.3.7-dist/css"));
});
gulp.task("copyBootstrapFonts",function () {
    return gulp.src("./src/bootstrap-3.3.7-dist/fonts/*.{eot,svg,ttf,woff,woff2}").pipe(gulp.dest("dist/bootstrap-3.3.7-dist/fonts"));
});
gulp.task("copyBootstrapJs",function () {
    return gulp.src("./src/bootstrap-3.3.7-dist/js/*.js").pipe(gulp.dest("dist/bootstrap-3.3.7-dist/js"));
});


/*=====================复制所有静态资源到dist中=======================*/
gulp.task("build",["copyHtml","copyAfterSalesHtml",
                   "copyCss","copyActiveCSSCss","copyAfterSalesCss","copyButtonCssCss","copyDingzhiCss","copyLoginCssCss","copyNavCss","copyPersonCss","copyPersonalPagesCss",
                   "copyJs","copyActiveJSJs","copyDingzhiJs","copyNavJs","copyPersonJs",
                   "copyImg","copyActiveGoodsImg","copyActiveImgImg","copyAp1Img","copyAz1Img","copyCofalImg","copyColorImgImg","copyDingzhiImg","copyHarp_picImg","copyHuiyuanImg","copyIndexImg","copyLjImg","copyLoginImg","copyNavImg","copyPerson-memberImg","copyShowImgImg","copySofa_picImg","copyPhps_imgImg","copySp_imgImg","copyTm_imgImg",
                   "copyFonts","copyLoginCssFonts","copyNavFonts",
                   "copyBootstrapCss","copyBootstrapFonts","copyBootstrapJs"],function(){
    console.log("主程序执行完毕")
});

/*=====================删除所有静态资源=======================*/
gulp.task("allClean",function () {
    return gulp.src("./dist/*").pipe(clean(),function () {
        console.log("清除所有静态资源完毕");
    });
});

/*=====================监听所有静态资源=======================*/
gulp.task("allWatch",function () {
    gulp.watch("./src/pages/index.html",["reBuild"]);
});
gulp.task("reBuild",["allClean"],function () {
    gulp.start("build");
});

/*=====================实时刷新插件=======================*/
const bs=require("browser-sync");
gulp.task("browserSync",function () {
    let files = ["./dist/**/*.html","./dist/**/**/*.html","./dist/**/*","./dist/**/**/*"];
    bs.init(files,{server:{baseDir:"./dist/public"}})
});

/*=====================给静态资源加上公共部分=======================*/
const fileInclude=require("gulp-file-include");
gulp.task("includeHtml",function () {
    gulp.src(["./src/pages/*.html","./src/pages/AfterSales/*.html","!./src/pages/index.html"])
        .pipe(fileInclude({
            prefix:"@@",//表示指令前缀
            basepath:"@file" //定死的 指的是当前文件的路径
        }))
        .pipe(gulp.dest("./dist/pages"));
});