$(function() {
    $('body').addClass('loaded');

    resizeUlnav();

    /*导航栏子菜单显示*/
    $(".leftNav>li").hover(function () {
        $($(this).children()[1]).css("display","block");
    },function () {
        $($(this).children()[1]).css("display","none");
    });

    /*导航的js鼠标悬停事件*/
    let imgsrc;
    $(".submenu li").hover(function () {
        imgsrc = $(this).children().children()[0].getAttribute("src");
        let huaji = imgsrc.split(".jpg");
        huaji.push("2");
        huaji.push(".jpg");
        let imgsrcH = huaji.join("");
        $(this).children().children()[0].setAttribute("src",imgsrcH);
        $($(this).children().children()[1]).css("color","white");
    },function () {
        $(this).children().children()[0].setAttribute("src",imgsrc);
        $($(this).children().children()[1]).css("color","#d8d8d8");
    });

});
setTimeout(removeDiv,1000);
function removeDiv() {
    $('body').addClass('loaded');
    $('#loader-wrapper').remove();
}

$(window).resize(function () {
    resizeUlnav();
});

/*修改导航条的宽度*/
function resizeUlnav() {
    $(".submenu").css("width",$(window).width());
}


$(window).scroll(function () {
    //$(window).scrollTop()这个方法是当前滚动条滚动的距离
    //$(window).height()获取当前窗体的高度
    //$(document).height()获取当前文档的高度
    // if ((bot + $(window).scrollY()) >= ($(document).height() - $(window).height())) {
    //     //当底部基本距离+滚动的高度〉=文档的高度-窗体的高度时；
    //     //我们需要去异步加载数据了
    //     $.getJSON("url", { page: "2" }, function (str) { alert(str); });
    // // }
    if($(window).scrollTop()>=260){
        $(".headerTop").css({top:"-45px"});
        $(".headerNav").css({top:"0"});
    }
    if($(window).scrollTop()<=260) {
        $(".headerTop").css({top:"0"});
        $(".headerNav").css({top:"-45px"});
    }
});