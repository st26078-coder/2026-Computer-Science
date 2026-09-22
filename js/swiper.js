// new Swiper('#swiper-1')

new Swiper('#swiper-1',{ 
    effect: 'fade',
    fadeEffect:{
        crossFade: true
    },
    autoplay:{
        delay: 5000,
        disableOnInteraction: false
    },
    pagination:{
        el: "#swiper-1 .swiper-pagination",
        clickable: true
    },
    loop: true
});