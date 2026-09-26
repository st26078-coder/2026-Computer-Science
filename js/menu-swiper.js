new Swiper('#menu-swiper', {
    loop: true,


navigation: {
    nextEl: '.menu-next',
    prevEl: '.menu-prev'
},

pagination: {
    el: '#menu-swiper .swiper-pagination',
    clickable: true
},

autoplay:{
    delay: 4500,
    disableOnInteraction: true
},

});