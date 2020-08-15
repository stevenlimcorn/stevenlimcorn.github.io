$(document).ready(function(){
    $(window).scroll(function(){
        var image = $(".background").css("height");
        image = parseFloat(image.slice(0, image.length - 2)) - 200;
        // console.log(image - 200.0);
        var scroll = $(window).scrollTop();
        if (scroll > image) {
            $('#nav-table').removeClass('work-table');
        } else {
            $('#nav-table').addClass('work-table');
        }
    })
})