
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:false,
    autoplayTimeout:4000,
    autoplaySpeed:1000,
    autoplayHoverPause :true,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1100:{
            items:3
        }
    }
})
$(window).scroll(function () {

    if ($(window).scrollTop() > 50) {
        $('.main_h').addClass('sticky');
        $('.header-logo').addClass('header-logo-toggle');
        $('.header-logo').removeClass('header-logo-untoggle');
    } else {
        $('.main_h').removeClass('sticky');
        $('.header-logo').removeClass('header-logo-toggle');
        $('.header-logo').addClass('header-logo-untoggle');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function () {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function () {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

