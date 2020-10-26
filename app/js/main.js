$(function () {
    $('.review-section__carousel').slick({
        appendArrows: $('.carousel__controls'),
        //centerMode: true,
        dots: true,
        focusOnChange: true,
        focusOnSelect: true,
        infinite: false,
        initialSlide: 1,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 1150,
            settings: {
                focusOnSelect: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 800,
            settings: {
                focusOnSelect: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }, {
            breakpoint: 300,
            settings: "unslick" // destroys slick
        }]
    });
});
