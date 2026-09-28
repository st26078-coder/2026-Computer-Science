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

function switchView(view){
    const swiperContainer = document.getElementById('swiper-container');
    const gridContainer = document.getElementById('grid-container');
    const btnSwiper = document.getElementById('btn-swiper');
    const btnGrid = document.getElementById('btn-grid');

    if(view =='swiper') {
        swiperContainer.style.display = 'block';  
        gridContainer.style.display = 'none';      
        btnSwiper.classList.add('active');        
        btnGrid.classList.remove('active');        
    }

    else{
        swiperContainer.style.display = 'none'; 
        gridContainer.style.display = 'block';     
        btnSwiper.classList.remove('active');      
        btnGrid.classList.add('active');           
    }
}