window.onload=function () {
    $('body').addClass('loaded');
};
setTimeout(removeDiv,1000);
function removeDiv(){
    console.log("移出动画div");
    $('body').addClass('loaded');
    $('#loader-wrapper').remove();
}