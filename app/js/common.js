$('.partners-slider').slick({
    slidesToShow: 8,
    appendArrows: '.partners-slider__nav',
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
});


$('.events-slider').slick({
    slidesToShow: 3,
    arrows: false,
    dots: true,
    appendDots: '.events-slider__nav',
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }
    ]
});

$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
});


$('[name="phone"]').mask('+7 (999) 999-99-99');