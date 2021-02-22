new Swiper('.image-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    // renderBullet: function (index, className) {
    //     return '<span class="' + className + '">' + (index + 1) + '</span>';

    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true
    // },

    hashNavigation: {
        watchState: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,

    },
    // autoHeight: true,
    loop: true,
    autoplay: {
        delay: 2500,
        stopOnlastSlide: false,
        disableOnInteraction: false,
    },
    speed: 800,

    // effect: 'fade',

    // fadeEffect: {
    // crossFade: true,
    // sldieShadows: true,
    // limitRotation: true,
    // },
    // effect: 'flip',

    // flipEffect: {
    //     sldieShadows: true,
    //     limitRotation: true,

    // },

    effect: 'cube',

    cubeeffect: {
        slideShadow: true,
        shadow: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },


});
new Swiper('.special_prices', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    hashNavigation: {
        watchState: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,

    },
    loop: true,
    autoplay: {
        delay: 2500,
        stopOnlastSlide: false,
        disableOnInteraction: false,
    },
    speed: 800,


    effect: 'fade',

    fadeEffect: {
        crossFade: true,
        sldieShadows: true,
        limitRotation: true,
    },
});


