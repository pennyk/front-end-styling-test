$(document).ready(function () {
    $('.review-section__carousel').slick({
        appendArrows: $('.carousel__controls'),
        centerMode: true,
        focusOnChange: true,
        focusOnSelect: true,
        infinite: false,
        initialSlide: 1,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1024,
            settings: {
                dots: true,
                focusOnSelect: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                focusOnSelect: true,
                slidesToShow: 2,
                dots: true
            }
        }, {
            breakpoint: 300,
            settings: "unslick" // destroys slick
        }]
    });
});
