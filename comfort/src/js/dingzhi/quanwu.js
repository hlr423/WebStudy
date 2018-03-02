var number=1;
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
    $(".mydiv1").css("margin-left","28%")
});
$(window).resize(function () {
   resizeimg();
   resizebuton();
    resizeimg1();
    resizebuton1();
});
function resizeimg() {
    $(".myimg2").css("height",$(window).width()*.3+"px");
}

function resizeimg1() {
    $(".myimg3").css("height",$(window).width()*.3+"px");
}
function resizebuton1() {
    $(".button3").css("margin-top",$(window).width()*.024+"px");
}
function bianguang1() {
    $(".mydiv12>div:nth-of-type("+number+")").css("border","1px solid red");
    $(".mydiv12>div:nth-of-type("+number+")").attr("id","mydiv4");
}


function resizebuton() {
    $(".button2").css("margin-top",$(window).width()*.024+"px");
}
function bianguang() {
    $(".mydiv11>div:nth-of-type("+number+")").css("border","1px solid red");
    $(".mydiv11>div:nth-of-type("+number+")").attr("id","mydiv3");
}
resizebuton();
resizeimg();
bianguang();
resizeimg1();
resizebuton1();
bianguang1();
function quxiao() {
    for(var i=0;i<$(".mydiv3").length;i++){
        $($(".mydiv3")[i]).css("border","none");
        $($(".mydiv3")[i]).attr("id","");
    }
}
function quxiao1() {
    for(var i=0;i<$(".mydiv4").length;i++){
        $($(".mydiv4")[i]).css("border","none");
        $($(".mydiv4")[i]).attr("id","");
    }
}
function myleft(obj) {
    number--;
    if(number<1){
        number=1
    }
    if(obj.id=="1"){
        quxiao();
        bianguang();
        fenrmian()
    }
    if(obj.id=="3"){
        quxiao1();
        bianguang1();
        fenrmian1()
    }

}
function myright(obj) {
    number++;
    if(number>$(".mydiv3").length){
        number=$(".mydiv3").length;
    }
    if(obj.id=="2"){
        quxiao();
        bianguang();
        fenrmian();
    }
    if(obj.id=="4"){
        quxiao1();
        bianguang1();
        fenrmian1()
    }

}
function fenrmian() {
    for(var j=0;j<$(".imgmian").length;j++){
        $($(".imgmian")[j]).css("z-index","1")
    }
    if(number==1){
        $(".img1").css("z-index","2")
    }
    if(number==2){
        $(".img2").css("z-index","2")
    }
    if(number==3){
        $(".img3").css("z-index","2")
    }
    if(number==4){
        $(".img4").css("z-index","2")
    }
}
function fenrmian1() {
    for(var j=0;j<$(".imgmian1").length;j++){
        $($(".imgmian1")[j]).css("z-index","1")
    }
    if(number==1){
        $(".img5").css("z-index","2")
    }
    if(number==2){
        $(".img6").css("z-index","2")
    }
    if(number==3){
        $(".img7").css("z-index","2")
    }
    if(number==4){
        $(".img8").css("z-index","2")
    }
}
function mydiv1() {
    quxiao();
    number=1;
    fenrmian();
    bianguang();
}
function mydiv2() {
    quxiao();
    number=2;
    fenrmian();
    bianguang();
}
function mydiv3() {
    quxiao();
    number=3;
    fenrmian();
    bianguang();
}
function mydiv4() {
    quxiao();
    number=4;
    fenrmian();
    bianguang();
}
function mydiv5() {
    quxiao1();
    number=1;
    fenrmian1();
    bianguang1();
}
function mydiv6() {
    quxiao1();
    number=2;
    fenrmian1();
    bianguang1();
}
function mydiv7() {
    quxiao1();
    number=3;
    fenrmian1();
    bianguang1();
}
function mydiv8() {
    quxiao1();
    number=4;
    fenrmian1();
    bianguang1();
}