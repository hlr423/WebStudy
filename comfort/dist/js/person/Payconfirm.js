$(window).scroll(function () {
    console.log($(window).scrollTop());
    if($(window).scrollTop()>=760){
        $(".mid-4").css({
            position:"relative"
        })
    }else if($(window).scrollTop()<760){
        $(".mid-4").css({
            position:"fixed"
        })
    }
});