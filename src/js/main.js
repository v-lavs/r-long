/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../lib/swiper/swiper-bundle.min.js
//= include ../lib/waypoints/index.js

// CUSTOM SCRIPTS

function destroySwiper(sliderInstance) {
    if (sliderInstance instanceof Swiper && sliderInstance.initialized) {
        sliderInstance.destroy(true, true);
    }
}

$(document).ready(function () {
    //MOBILE MENU
    const nav = $('.header__nav');

    $('.burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        jQuery('.backdrop').fadeIn();
    });

    $('.btn-close, .backdrop').click(function (e) {
        e.preventDefault();
        nav.removeClass('open');
        jQuery('.backdrop').fadeOut();
    });

    //  SEARCH-BAR
    const searchBar = $('.search-bar');

    $('#openSearch').click(function (e) {
        e.preventDefault();
        searchBar.addClass('active');
    });

    $('#closeSearch').click(function (e) {
        e.preventDefault();
        searchBar.removeClass('active');
    });


//    HEADER SCROLL
    $(function() {
        const header = $(".header");
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.addClass('frosted');
            } else {
                header.removeClass('frosted');
            }
        });
    });


//ACCORDION
    $('#accordion .panel__heading').on('click', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this)
                .siblings('.panel-collapse')
                .slideUp(500);
            $('#accordion .panel__heading .open-panel')
                .removeClass('open-panel:before')
                .addClass('open-panel')
        } else {
            $('#accordion .panel__heading .open-panel')
                .removeClass('open-panel:before')
                .addClass('open-panel');
            $(this)
                .find('open-panel')
                .removeClass('open-panel')
                .addClass('open-panel:before');
            $('#accordion .panel__heading').removeClass('open');
            $(this).addClass('open');
            $('.panel-collapse').slideUp(500);
            $(this)
                .siblings('.panel-collapse')
                .slideDown(500)
        }
    });


    // HOME BANNER ANIMATION

    function useTextRevealAnim() {
        const $textWrap = $('.text-reveal');

        $textWrap.each(function (index, item) {
            const textContent = $(item).text();

            const parsedWords = textContent.split(' ').map(function (item) {
                const wordWrap = $('<span class="text-reveal__word-wrap"></span>');
                const word = $('<span class="text-reveal__word"></span>');

                word.html(item + '&nbsp;');
                wordWrap.html(word);

                return wordWrap;
            });

            $(item).html(parsedWords);
        });
    }
    useTextRevealAnim();

    setTimeout(function () {
        $('.section-banner').addClass('anim_started');
        $('.header.fadeInUp').addClass('active_anim');
    }, 200);

    //SLIDER

    if ($('.related-post__slider').get(0)) {

        const relatedPostSlider = new Swiper(".related-post__slider", {
           freeMode:true,
            spaceBetween:20,
            speed: 3000,

            slidesPerView: 'auto',
            scrollbarDraggable: false,
            scrollbarHide: false,
            freeModeSticky: true,
            freeModeMinimumVelocity: 0.4,
            freeModeMomentumRatio: 0.28,
            direction:'horizontal',

            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }

    if ($('.types-anesthesia__slider').get(0)) {

        const typesAnesthesiaSlider = new Swiper(".types-anesthesia__slider", {
            freeMode:true,
            spaceBetween:20,
            speed: 3000,

            slidesPerView: 'auto',
            scrollbarDraggable: false,
            scrollbarHide: false,
            freeModeSticky: true,
            freeModeMinimumVelocity: 0.4,
            freeModeMomentumRatio: 0.28,
            direction:'horizontal',

            scrollbar: {
                el: '.wrap-slider .swiper-scrollbar',
                draggable: true,
            },
            navigation: {
                nextEl: ".wrap-slider .swiper-button-next",
                prevEl: ".wrap-slider .swiper-button-prev",
            },
        });
    }

    //BUTTON BACK

    let btn = $('#btnBack');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });



    // let reasonSlider;
    // let typesSlider;
    // const reasonSelector = $('.reason-slider').get(0);
    // const typesSelector = $('.types-slider').get(0);
    //
    // function handleResponsive() {
    //
    //     // DESTROY SLIDER INSTANCES
    //
    //     if ($(window).outerWidth() <= 991) {
    //         if (!reasonSlider && reasonSelector) {
    //             reasonSlider = new Swiper(".reason-slider", {
    //                 spaceBetween: 60,
    //                 pagination: {
    //                     el: ".swiper-pagination",
    //                     clickable: true,
    //                 },
    //             });
    //         }
    //     } else {
    //         destroySwiper(reasonSlider);
    //         reasonSlider = null;
    //     }
    //
    //     if ($(window).outerWidth() <= 767) {
    //         if (!typesSlider && typesSelector) {
    //             typesSlider = new Swiper(".types-slider", {
    //                 slidesPerView: 1.25,
    //                 spaceBetween: 60,
    //                 slidesOffsetBefore: 10,
    //                 slidesOffsetAfter: 40,
    //                 breakpoints: {
    //                     420: {
    //                         slidesPerView: 1.5,
    //                         spaceBetween: 60,
    //                         slidesOffsetBefore: 10,
    //                         slidesOffsetAfter: 40,
    //                     },
    //                     767: {
    //                         slidesPerView: 1.75,
    //                         spaceBetween: 60,
    //                         slidesOffsetBefore: 10,
    //                         slidesOffsetAfter: 40,
    //                     },
    //                 },
    //                 pagination: {
    //                     el: ".swiper-pagination",
    //                     clickable: true,
    //                 },
    //             });
    //         }
    //     } else {
    //         destroySwiper(typesSlider);
    //         typesSlider = null;
    //     }
    // }
    //
    // let resizeId;
    //
    //
    // handleResponsive();
    //
    // window.addEventListener('resize', function () {
    //     clearTimeout(resizeId);
    //     resizeId = setTimeout(handleResponsive, 500);
    // });


    //MODAL

    $('.open-modal').on('click', function (e) {
        e.preventDefault();
        $('.backdrop, .popup').fadeIn(500);
    });

    $('.close-popup, .backdrop').on('click', function () {
        $('.backdrop, .popup').fadeOut(500);
    });



//    ANIMATION


    setTimeout(function () {
        const sectionWaypoints = $('.anim-page').waypoint({
            handler: function () {
                $(this.element).addClass('active-anim');
            },
            offset: '80%'
        });
    }, 300);

});

