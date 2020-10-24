$(document).ready(function () {
    $('.review-carousel').slick({
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }
        }, {
            breakpoint: 300,
            settings: "unslick" // destroys slick
        }]
    });
});
