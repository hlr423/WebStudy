let timener; //控制轮播的计时器
let indexnumber = 1; //控制显示张数的数组

$(function () {
    resizeUl();
    bannerSpan();  //给banner按钮循环绑定鼠标单击事件

    /*导航栏子菜单显示*/
    // $(".leftNav>li").hover(function () {
    //     $($(this).children()[1]).css("display","block");
    // },function () {
    //     $($(this).children()[1]).css("display","none");
    // });


    /*导航的js鼠标悬停事件*/
    // let imgsrc;
    // $(".submenu li").hover(function () {
    //     imgsrc = $(this).children().children()[0].getAttribute("src");
    //     let huaji = imgsrc.split(".jpg");
    //     huaji.push("2");
    //     huaji.push(".png");
    //     let imgsrcH = huaji.join("");
    //     $(this).children().children()[0].setAttribute("src",imgsrcH);
    //     $($(this).children().children()[1]).css("color","white");
    // },function () {
    //     $(this).children().children()[0].setAttribute("src",imgsrc);
    //     $($(this).children().children()[1]).css("color","#d8d8d8");
    // });
});

$(window).resize(function () {
    resizeUl();
});

/*修改banner图的高度*/
function resizeUl() {
    $(".bannerImgUl").css("height",$(window).width()*.33+"px");
    // $(".submenu").css("width",$(window).width());
    // $(".miansubmenu").css("width",$(window).width());
}



/*这一块是轮播*/
timener = setInterval(bannerTime,6000);

function bannerTime() {
    indexnumber++;
    if (indexnumber>8){
        indexnumber=1;
    }
    $(".bannerSpanUl li:nth-of-type("+indexnumber+")").addClass("spanActive").siblings().removeClass("spanActive");
    // $(".bannerImgUl li:nth-of-type("+indexnumber+")").siblings().css({
    //     display:"none",
    //     Zindex:"1"
    // }).animate({opacity:0},function () {
    //     $(".bannerImgUl li:nth-of-type(" + indexnumber + ")").css({
    //         Zindex: "2",
    //         display: "block"
    //     }).animate({opacity: 1});
    // });
    $(".bannerImgUl li:nth-of-type("+indexnumber+")").css({
        Zindex: "2",
        display: "block"
    }).animate({opacity:1},function () {
        $(".bannerImgUl li:nth-of-type(" + indexnumber + ")").siblings().css({
            Zindex: "1",
            display: "none"
        }).animate({opacity: 0});
    });
}

function bannerSpan() {
    for(let i=1;i<9;i++){
        $(".bannerSpanUl li:nth-of-type("+i+")").bind("click",function () {
            clearInterval(timener);
            indexnumber = i-1;
            console.log("此时按钮的值是"+indexnumber);
            bannerTime();
            timener = setInterval(bannerTime,6000);
        });
    }
}


/*===============================右侧的导航==========================================*/
$(window).scroll(function () {

    if ($(window).scrollTop()>=260){
        $(".backTop").slideDown()
    }else {
        $(".backTop").slideUp()
    }
});
$(".member").hover(function () {
    $(".member").children()[0].setAttribute("src","../images/nav/leftNav_41.png");
},function () {
    $(".member").children()[0].setAttribute("src","../images/nav/leftNav_43.png");
});
$(".shopCar").hover(function () {
    $(".shopCar").children()[0].setAttribute("src","../images/nav/shopCar1(2).png");
},function () {
    $(".shopCar").children()[0].setAttribute("src","../images/nav/shopCar.png");
});
$(".service").hover(function () {
    $(".service").children()[0].setAttribute("src","../images/nav/leftNav_23.png");
},function () {
    $(".service").children()[0].setAttribute("src","../images/nav/leftNav_31.png");
});
$(".backTop").hover(function () {
    $(".backTop").children()[0].setAttribute("src","../images/nav/leftNav_25.png");
},function () {
    $(".backTop").children()[0].setAttribute("src","../images/nav/leftNav_33.png");
});

/*==============购物车===============*/
$(".shopCar").click(function () {
    if ($(".leftMainNav").css("right")=="420px"){
        $(".leftMainNav").css("right","0");
        $(".shopCarDiv").css("right","-400px");
    }else {
        $(".leftMainNav").css("right","420px");
        $(".shopCarDiv").css("right","0");
    }

});


/*==========================页面的动态效果================================================*/
$(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop()>=320){
        $(".sofaProductRow1").css("opacity","1").addClass("animated fadeInUp");
    }
    if($(window).scrollTop()>=700){
        $(".sofaProductRow2").css("opacity","1").addClass("animated fadeInUp");
    }
    if($(window).scrollTop()>=1080){
        $(".sofaProductRow3").css("opacity","1").addClass("animated fadeInUp");
    }
    if($(window).scrollTop()>=1800){
        $(".img-left1").css("opacity","1").addClass("animated fadeInLeft");
        $(".img-right1").css("opacity","1").addClass("animated fadeInRight");
    }
    if($(window).scrollTop()>=2300){
        $(".img-left2").css("opacity","1").addClass("animated fadeInLeft");
        $(".img-right2").css("opacity","1").addClass("animated fadeInRight");
    }
    if($(window).scrollTop()>=3700){
        $(".physicalStoreLeft").css("opacity","1").addClass("animated fadeInLeft");
        $(".physicalStoreRight").css("opacity","1").addClass("animated fadeInRight");
    }
});
// $(".sofaProductRow1").addClass("animated fadeInUp");
// $(".sofaProductRow1").addClass("animated fadeInUp");
// $(".sofaProductRow1").addClass("animated fadeInUp");