$(function(){
    $("#demo").jcImgScroll({
        arrow : {
            width:45,
            height:400,
            x:60,
            y:0
        },
        width : 600, //设置图片宽度
        height:469, //设置图片高度
        imgtop:22,//每张图片的上下偏移量
        imgleft:-10,//每张图片的左边偏移量
        imgwidth:30,//每张图片的宽度偏移量
        imgheight:44,//每张图片的高度偏移量
        count : 9,
        offsetX : 60,
        NumBtn : false,
        title:false,
        setZoom:.8,
    });
});