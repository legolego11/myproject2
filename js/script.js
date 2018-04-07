$(document).ready(function() {
    $(".slider").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true
    });

     $(".slider-snowboards").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        nav:true,
        center: true,
        navText: [' ', ' ' ]
    });
});


