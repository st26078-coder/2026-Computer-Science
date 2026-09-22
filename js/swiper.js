// new Swiper('#swiper-1')

new Swiper('#swiper-1',{ 
    effect: 'fade',
    fadeEffect:{
        crossFade: true
    },
    autoplay:{
        delay: 4500,
        disableOnInteraction: true
    },
    pagination:{
        el: "#swiper-1 .swiper-pagination",
        clickable: true
    },
    navigation:{
        nextEl: "#swiper-1 .swiper-button-next",
        prevEl: "#swiper-1 .swiper-button-prev"
    },
    loop: true
});