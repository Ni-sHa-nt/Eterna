// Toogle Menu
const menuBtn = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar-collapsed');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const menu = document.querySelector('.nav-menu');

menu.addEventListener('click', function () {
    this.classList.toggle('active');
});


// Usp-bar Section 
const swiper = new Swiper(".companySwiper", {
    slidesPerView: "auto",
    spaceBetween: 60,
    loop: true,

    speed: 6000,          // higher = smoother
    allowTouchMove: false,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    freeMode: false,
});





// Shop The Look Section
// $(document).ready(function () {

//     const slider = $(".myslider");

//     slider.owlCarousel({
//         items: 1,
//         loop: false,
//         autoplay: false,
//         autoplayHoverPause: true,
//         autoplayTimeout: 5000,
//         smartSpeed: 1000,
//         margin: 0,
//         nav: true,
//         dots: false,
//         lazyLoad: true,
//         responsive: {
//             0: { items: 1, nav: false, dots: true },
//             360: { items: 1, nav: false, dots: true },
//             480: { items: 1, nav: false, dots: true },
//             600: { items: 1, nav: false, dots: true },
//             768: { items: 1, nav: false, dots: true },
//             992: { items: 1, nav: false, dots: true },
//             1200: { items: 1, nav: true, dots: false },
//         },
//     });

//     // ✅ Total slides (excluding cloned)
//     const totalSlides = slider.find('.owl-item:not(.cloned)').length;
//     $('#total').text(totalSlides);

//     // ✅ Current slide number
//     slider.on('changed.owl.carousel', function (event) {
//         $('#current').text(event.item.index + 1);
//     });

// });


// =================Marquee Slider Start===================== //
// $(function () {
//     $('.marquee-carousel').owlCarousel({
//         loop: true,
//         autoplay: true,
//         // slideTransition: 'linear',
//         // autoplaySpeed: 2000,
//         autoplayTimeout: 2500,
//         smartSpeed: 2500,
//         // margin: 60,
//         nav: false,
//         dots: false,
//         navElement: 'div',
//         // navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
//         lazyLoad: true,
//         responsive: {
//             0: {
//                 items: 3,
//                 loop: true
//             },

//             600: {
//                 items: 4,
//                 loop: true
//             },
//             768: {
//                 items: 5,
//                 loop: true
//             },
//             992: {
//                 items: 6,
//                 loop: true
//             },
//             1200: { items: 8 },
//         },
//     });
// });



