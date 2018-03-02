
var color;
var col;
col=$(".clt").css("color");
$(".collect").click(function () {

    if(color!=col){
        $(".m-text").text("收藏成功！");
        $(".clt").css("color", "#68ff86");
        col=$(".clt").css("color");
        color=col
    //
    }else {
        $(".clt").css("color", "black");
        col=$(".clt").css("color");
        $(".m-text").text("取消收藏！");
    }
});

// //animated动画的调用
// $(".content1-1").hover(function () {
//     console.log("1:");
//     $(".content1-text").css("visibility","visible");
//     $(".content1-text").addClass("animated fadeInLeft")
// },function () {
//     $(".content1-text").removeClass("animated fadeInLeft");
//     $(".content1-text").addClass("animated fadeOutRight");
//     setTimeout(huaji,700);
// });
//
// function huaji() {
//     $(".content1-text").css("visibility","hidden");
//     $(".content1-text").removeClass("animated fadeInLeft fadeOutRight");
//
// }
