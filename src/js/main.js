/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../lib/swiper/swiper-bundle.min.js
//= include ../lib/mediabox/modal-video.min.js
//= include ../lib/waypoints/index.js

// CUSTOM SCRIPTS


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

    // SMOOTH SCROLL TO ANCHOR
    function smoothScrollToAnchor(selector) {
        $(selector).on('click', function (event) {
            let anchor = $.attr(this, 'href');
            let offsetSize = $("header").innerHeight();

            if (anchor.match(/^#/) && anchor !== '#') {
                event.preventDefault()
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top - offsetSize
                }, 2000);
                nav.removeClass('open');
                jQuery('.backdrop').fadeOut();
                $('body').removeClass('modal_open');
            }
        })
        let myHash = location.hash;
        location.hash = '';
        let offsetSize = $("header").innerHeight();
        if (myHash[1] != undefined) {
            $('html, body').animate({scrollTop: $(myHash).offset().top - offsetSize}, 1500);
        }

    }

    smoothScrollToAnchor('.menu__link');
    smoothScrollToAnchor('.scroll-down');

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
    $(function () {
        const header = $(".header .container-full");
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.addClass('decor');
            } else {
                header.removeClass('decor');
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

    //FILTER

    $('.filter-posts .btn_light').click(function (e) {
        e.preventDefault();
        $('.filter-posts .btn_light').removeClass('active');
        $(this).addClass('active');

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
    setTimeout(function () {
        $('.section-banner').addClass('anim_text');

    }, 1100);

    //SLIDER

    if ($('.related-post__slider').get(0)) {

        const relatedPostSlider = new Swiper(".related-post__slider", {
            freeMode: true,
            spaceBetween: 20,
            speed: 3000,

            slidesPerView: 'auto',
            scrollbarDraggable: false,
            scrollbarHide: false,
            freeModeSticky: true,
            freeModeMinimumVelocity: 0.4,
            freeModeMomentumRatio: 0.28,
            direction: 'horizontal',

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
            freeMode: true,
            spaceBetween: 20,
            speed: 3000,

            slidesPerView: 'auto',
            scrollbarDraggable: false,
            scrollbarHide: false,
            freeModeSticky: true,
            freeModeMinimumVelocity: 0.4,
            freeModeMomentumRatio: 0.28,
            direction: 'horizontal',

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

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });


    //POPUP VIDEO
    const modalVideo = new ModalVideo('.js-modal-btn');


//    ANIMATION
    const sectionWaypoints = $('.slide-up').waypoint({
        handler: function (direction) {
            $(this.element).addClass('active-anim');
        },
        offset: '80%'
    });

    setTimeout(function () {
        const sectionWaypoints = $('.anim-page').waypoint({
            handler: function () {
                $(this.element).addClass('active-anim');
            },
            offset: '80%'
        });
    }, 300);


//    EMOJI-RANGE SLIDER
    const maxDimension = 1000;
    const $rangeSlider = $('.range-slider');
    const $rangeInput = $('.range-slider input');
    $rangeInput.attr('max', maxDimension);

    const emotionLength = $('.range-slider .emotion-item').length;
    const $rangeHandle = $('.range-slider .range-slider__handle');
    const $rangeText = $('.range-slider .range-slider__label-text');
    const $comments = $('.assess-pain .block-info__text');
    const $trackPlaceholder = $('.range-slider .range-slider__track_bg');
    const valHolder = $rangeSlider.find('.range-slider__value');
    const $emotions = $('.emotion-item');
    let prevHandleClass = $();

    $rangeInput.on('input', (e) => {
        const val = e.target.value;
        const displayedVal = Math.floor(val * (emotionLength - 1) / maxDimension) || 0;
        const nextEl = $emotions.eq(displayedVal);

        if (nextEl.length) {
            $emotions.removeClass('active');
            $rangeText.removeClass('active');
            $comments.removeClass('active');

            nextEl.addClass('active');

            $rangeText.eq(displayedVal).addClass('active');
            $comments.eq(displayedVal).addClass('active');

            const handleModificator = 'range-slider__handle' + '_' + displayedVal;

            $rangeHandle.removeClass(prevHandleClass).addClass(handleModificator);
            prevHandleClass = handleModificator;
        }

        $trackPlaceholder.css({left: val / 10 + '%'});
        $rangeHandle.css({left: val / 10 + '%'});
        $(valHolder).html(displayedVal * 2);
    });

});

