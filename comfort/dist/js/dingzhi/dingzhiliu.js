function Mydiv1() {
    document.getElementById("page_context").style.webkitTransform="translateY(-"+(100/6)*0+"%)";
    for(var i=0;i<7;i++){
        $("ul>li:nth-of-type("+i+")>div").css("background-color","white");
    }
    $("ul>li:nth-of-type(1)>div").css("background-color","red");
}
function Mydiv2() {
    document.getElementById("page_context").style.webkitTransform="translateY(-"+(100/6)+"%)";
    for(var i=0;i<7;i++){
        $("ul>li:nth-of-type("+i+")>div").css("background-color","white");
    }
    $("ul>li:nth-of-type(2)>div").css("background-color","red");
}
function Mydiv3() {
    document.getElementById("page_context").style.webkitTransform="translateY(-"+(100/6)*2+"%)";
    for(var i=0;i<7;i++){
        $("ul>li:nth-of-type("+i+")>div").css("background-color","white");
    }
    $("ul>li:nth-of-type(3)>div").css("background-color","red");
}
function Mydiv4() {
    document.getElementById("page_context").style.webkitTransform="translateY(-"+(100/6)*3+"%)";
    for(var i=0;i<7;i++){
        $("ul>li:nth-of-type("+i+")>div").css("background-color","white");
    }
    $("ul>li:nth-of-type(4)>div").css("background-color","red");
}
function Mydiv5() {
    document.getElementById("page_context").style.webkitTransform="translateY(-"+(100/6)*4+"%)";
    for(var i=0;i<7;i++){
        $("ul>li:nth-of-type("+i+")>div").css("background-color","white");
    }
    $("ul>li:nth-of-type(5)>div").css("background-color","red");
}
function Mydiv6() {
    document.getElementById("page_context").style.webkitTransform="translateY(-"+(100/6)*5+"%)";
    for(var i=0;i<7;i++){
        $("ul>li:nth-of-type("+i+")>div").css("background-color","white");
    }
    $("ul>li:nth-of-type(6)>div").css("background-color","red");
}
var snap = 0;
var _n = 6;
var flag=0;
pageChangeSize = function(){
    document.getElementById("page").style.height = window.innerHeight+"px";
    document.getElementById("pageOne").style.height = window.innerHeight+"px";
    document.getElementById("pageTwo").style.height = window.innerHeight+"px";
    document.getElementById("pageThree").style.height = window.innerHeight+"px";
    document.getElementById("pagesi").style.height = window.innerHeight+"px";
    document.getElementById("pagewu").style.height = window.innerHeight+"px";
    document.getElementById("pageliu").style.height = window.innerHeight+"px";
};
window.onload = function () {   //页面加载时
    pageChangeSize();
    // $("li>div")
};

window.onresize = function () { //窗口大小改变时
    pageChangeSize();
};

document.getElementById("page_context").addEventListener('webkitTransitionEnd', end, false);

function end(){
    flag=0;
}
document.body.onmousewheel = function(event) {
    if(flag == 1){
        return
    }
    flag = 1;
    event = event || window.event;
    var direction = event.wheelDelta && (event.wheelDelta > 0 ? "mouseup" : "mousedown");
    if(direction ==="mouseup"){
        if(snap==0){
            flag=0;
            return
        }
        snap--

    }else{
        if(snap>=(_n-1)){
            flag=0;
            return
        }
        snap++
    }
    document.getElementById("page_context").style.webkitTransform="translateY(-"+(100/6*(snap))+"%)";
    for(var i=0;i<7;i++){
        $("ul>li:nth-of-type("+i+")>div").css("background-color","white");
    }
    $("ul>li:nth-of-type("+(snap+1)+")>div").css("background-color","red");
};
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