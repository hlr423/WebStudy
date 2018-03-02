$(".ul1>li:nth-of-type(1)").mouseover(function () {
    $(".mydiv1").css("margin-left","0%")
});
$(".ul1>li:nth-of-type(2)").mouseover(function () {
    $(".mydiv1").css("margin-left","14%")
});
$(".ul1>li:nth-of-type(3)").mouseover(function () {
    $(".mydiv1").css("margin-left","28%")
});
$(".ul1>li:nth-of-type(4)").mouseover(function () {
    $(".mydiv1").css("margin-left","42%")
});
$(".ul1>li:nth-of-type(5)").mouseover(function () {
    $(".mydiv1").css("margin-left","58%")
});
$(".ul1>li:nth-of-type(6)").mouseover(function () {
    $(".mydiv1").css("margin-left","72%")
});
$(".ul1>li:nth-of-type(7)").mouseover(function () {
    $(".mydiv1").css("margin-left","86%")
});
$(".ul1").mouseout(function () {
    $(".mydiv1").css("margin-left","14%")
});
$(window).resize(function () {
    myRotate();
});
function myRotate() {
    $(".myRotate").css("height",$(window).width()*.12+"px");
}
myRotate();
$(function(){
    var container = $('.waterfull ul');
    var loading=$('#imloading');
    // 初始化loading状态
    loading.data("on",true);
    /*瀑布流开始*/
    var container = $('.waterfull');
    // 初始化loading状态
    /*判断瀑布流最大布局宽度，最大为1280*/
    function tores(){
        var tmpWid=$(window).width();
        if(tmpWid>1280){
            tmpWid=1280;
        }else{
            var column=Math.floor(tmpWid/320);
            tmpWid=column*320;
        }
        $('.waterfull').width(tmpWid);
    }
    tores();
    $(window).resize(function(){
        tores();
    });
    container.imagesLoaded(function(){
        container.masonry({
            columnWidth: 320,
            itemSelector : '.div4',
            isFitWidth: true,//是否根据浏览器窗口大小自动适应默认false
            isAnimated: true,//是否采用jquery动画进行重拍版
            isRTL:false,//设置布局的排列方式，即：定位砖块时，是从左向右排列还是从右向左排列。默认值为false，即从左向右
            isResizable: true,//是否自动布局默认true
            animationOptions: {
                duration: 800,
                easing: 'easeInOutBack',//如果你引用了jQeasing这里就可以添加对应的动态动画效果，如果没引用删除这行，默认是匀速变化
                queue: false//是否队列，从一点填充瀑布流
            }
        });
    });
    function loadImage(url) {
        var img = new Image();
        //创建一个Image对象，实现图片的预下载
        img.src = url;
        if (img.complete) {
            return img.src;
        }
        img.onload = function () {
            return img.src;
        };
    };

    /*通过ajax从后台获取到的数据*/
    // var sqlJson=[{'title':'瀑布流其实就是几个函数的事！','intro':'爆料，苏亚雷斯又咬人啦，C罗哪有内马尔帅，梅西今年要不夺冠，你就去泰国吧，老子买了阿根廷赢得彩票，输了就去不成了。','src':'images/one.jpeg','writer':'志强不息','date':'2小时前','looked':321},{'title':'瀑布流其实就是几个函数的事！','intro':'爆料了，苏亚雷斯又咬人啦，C罗哪有内马尔帅，梅西今年要不夺冠，你就去泰国吧，老子买了阿根廷赢得彩票，输了就去不成了。','src':'images/demo2.jpg','writer':'志强不息','date':'2小时前','looked':321},{'title':'瀑布流其实就是几个函数的事！','intro':'爆料了，苏亚雷斯又咬人啦，C罗哪有内马尔帅，梅西今年要不夺冠，你就去泰国吧，老子买了阿根廷赢得彩票，输了就去不成了。','src':'images/p1.jpg','writer':'志强不息','date':'2小时前','looked':321},{'title':'瀑布流其实就是几个函数的事！','intro':'爆料了，苏亚雷斯又咬人啦，C罗哪有内马尔帅，梅西今年要不夺冠，你就去泰国吧，老子买了阿根廷赢得彩票，输了就去不成了。','src':'images/p1.jpg','writer':'志强不息','date':'2小时前','looked':321}];
    window.onload=function () {
        getALLUser();
    }




    var sqlJson;
    function getALLUser() {
        var xhr;
        if(window.XMLHttpRequest){
            xhr=new  XMLHttpRequest();
        }else {
            xhr=new ActiveXObject("microsoft.XMLHTTP");
        }
        xhr.onreadystatechange=function () {
            if(xhr.readyState==4&&xhr.status==200){
                // var data=xhr.responseText;
                var data=JSON.parse(xhr.responseText);//将JSON字符串转换成了JSON对象
                sqlJson=data;
                // console.log("lanren:"+data[0].c_text)
            }

        };
        xhr.open("get","/getbaibian.do");
        xhr.send(null)
    }


    /*本应该通过ajax从后台请求过来类似sqljson的数据然后，便利，进行填充，这里我们用sqlJson来模拟一下数据*/
    $(window).scroll(function(){


        // 计算所有瀑布流块中距离顶部最大，进而在滚动条滚动时，来进行ajax请求，方法很多这里只列举最简单一种，最易理解一种
        var itemNum=$('#waterfull').find('.div4').length;
        var itemArr=[];
        itemArr[0]=$('#waterfull').find('.div4').eq(itemNum-1).offset().top+$('#waterfull').find('.div4').eq(itemNum-1)[0].offsetHeight;
        itemArr[1]=$('#waterfull').find('.div4').eq(itemNum-2).offset().top+$('#waterfull').find('.div4').eq(itemNum-1)[0].offsetHeight;
        itemArr[2]=$('#waterfull').find('.div4').eq(itemNum-3).offset().top+$('#waterfull').find('.div4').eq(itemNum-1)[0].offsetHeight;

        var maxTop=Math.max.apply(null,itemArr);

        if(maxTop<$(window).height()+$(document).scrollTop()){
            console.log("hddhhfkajfjkshafjkdhajkhdk");

            //加载更多数据
            loading.data("on",false).fadeIn(800);
            (function(sqlJson){

                /*这里会根据后台返回的数据来判断是否你进行分页或者数据加载完毕这里假设大于30就不在加载数据*/
                if(itemNum>70){
                    loading.text('就有这么多了！');
                }else{
                    var html="";
                    for(var i in sqlJson){
                        html+="<div class='col-xs-3 div4'>" +
                            "<div class='myRotate col-xs-12'>" +
                            "<div class='one'>" +
                            "<img src="+sqlJson[i].zhengtupian+" alt='' class='img-responsive'>" +
                            "</div>" +
                            "<div class='two'>" +
                            "<img src="+sqlJson[i].fantupian+" alt='' class='img-responsive'>" +
                            "</div>" +
                            "</div>" +
                            "<p class='text-center'>"+sqlJson[i].wenzi+"</p>" +
                            "<div class='col-xs-8 col-xs-offset-2'>" +
                            "<p class='glyphicon glyphicon-home text-center myp1'>体验配套方案</p>" +
                            "</div>" +
                            "</div>"
                    }
                    /*模拟ajax请求数据时延时800毫秒*/
                    var time=setTimeout(function(){
                        $(html).find('img').each(function(index){
                            loadImage($(this).attr('src'));
                        });
                        var $newElems = $(html).css({ opacity: 0}).appendTo(container);
                        $newElems.imagesLoaded(function(){
                            $newElems.animate({ opacity: 1},800);
                            container.masonry( 'appended', $newElems,true);
                            loading.data("on",true).fadeOut();
                            clearTimeout(time);
                        });
                    },800)
                }
            })(sqlJson);
        }
    });

});
