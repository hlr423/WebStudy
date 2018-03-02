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
    $(".mydiv1").css("margin-left","86%")
});


function changeCity(){
    var shengId=document.getElementById("sheng");
    var shi=document.getElementById("shi");
    console.log(typeof shengId.value);
    if(shengId.value=="0"){
        shi.innerHTML="<option value='1'>成都</option>"+
            "<option value='2'>乐山</option>"+
            "<option value='3'>绵阳</option>"+
            "<option value='4'>遂宁</option>"+
            "<option value='4'>攀枝花</option>"
    }else if(shengId.value=="1"){
        shi.innerHTML="<option value='1'>广州</option>"+
            "<option value='2'>深圳</option>"+
            "<option value='3'>东莞</option>"+
            "<option value='4'>珠海</option>"+
            "<option value='4'>佛山</option>"
    }else if(shengId.value=="2"){
        shi.innerHTML="<option value='1'>武汉</option>"+
            "<option value='2'>孝感</option>"+
            "<option value='3'>宜昌</option>"+
            "<option value='4'>荆门</option>"+
            "<option value='4'>十堰</option>"
    }else if(shengId.value=="3"){
        shi.innerHTML="<option value='1'>长沙</option>"+
            "<option value='2'>岳阳</option>"+
            "<option value='3'>株洲</option>"+
            "<option value='4'>张家界</option>"+
            "<option value='4'>衡阳</option>"
    }else if(shengId.value=="4"){
        shi.innerHTML="<option value='1'>济南</option>"+
            "<option value='2'>青岛</option>"+
            "<option value='3'>烟台</option>"+
            "<option value='4'>济宁</option>"+
            "<option value='4'>淄博</option>"
    }
}
function myh33() {
   $("#h322").css("color","red");
   $("#h311").css("color","white");
    $("#myform").css("display","none")
}
function myh22() {
    $("#h311").css("color","red");
    $("#h322").css("color","white");
    $("#myform").css("display","block")
}