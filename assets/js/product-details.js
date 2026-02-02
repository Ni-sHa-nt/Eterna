// Product-info Section
var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: 10,

    thumbs: {
        swiper: swiper,
    },
});


// Related Products Section
var relatedSwiper = new Swiper(".related-products-swiper", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    speed: 600,

    autoplay: {
        // delay: 2500,              
        // disableOnInteraction: false, 
        // pauseOnMouseEnter: true,  
    },


    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        }
    }
});

