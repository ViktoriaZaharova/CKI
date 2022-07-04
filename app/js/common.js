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

$('.team-slider').slick({
    slidesToShow: 4,
    variableWidth: true,
    appendArrows: '.team-slider__nav',
    prevArrow: '<button type="button" class="slick-prev slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow-my"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
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

$('.who-suit-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
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

// slick active
$(window).on('load resize', function() {
    if ($(window).width() < 992) {
        $('.announcement-slider:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            slidesToShow: 1,
            arrows: false
        });
    } else {
        $(".announcement-slider.slick-initialized").slick("unslick");
    }

    if ($(window).width() < 768) {
        $('.offers-slider:not(.slick-initialized)').slick({
            dots: true,
            infinite: true,
            slidesToShow: 2,
            arrows: false,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    } else {
        $(".offers-slider.slick-initialized").slick("unslick");
    }
});
// slick active


$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
});


$('[name="phone"]').mask('+7 (999) 999-99-99');


$( function() {
    //Сменим язык календаря на русский
    $.datepicker.setDefaults(
        {
            closeText: 'Закрыть',
            prevText: '',
            currentText: 'Сегодня',
            monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            monthNamesShort: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
            dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
            dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
            dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
            weekHeader: 'Не',
            dateFormat: 'dd.mm.yy',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ''
        });


    $( ".datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true
    });
} );
