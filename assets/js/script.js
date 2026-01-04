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


// Product Category section 
const categorySwiper = new Swiper(".categorySwiper", {
    slidesPerView: "6",
    spaceBetween: 30,

    loop: true,
    // loopedSlides: 9,          // number of slides
    // loopAdditionalSlides: 9,

    // speed: 6000,
    allowTouchMove: true,

    freeMode: false,

    autoplay: {
        // delay: 1,
        // disableOnInteraction: false,
    },

    breakpoints: {
        0: {            // screens >= 0px
            slidesPerView: 1,
            spaceBetween: 10,
        },
        480: {          // screens >= 480px
            slidesPerView: 2,
            spaceBetween: 15,
        },
        768: {          // screens >= 768px
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {         // screens >= 1024px
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1440: {         // screens >= 1440px (very large screens)
            slidesPerView: 6,
            spaceBetween: 30,
        }
    }
});


// Top Style Section
const topStyleSwiper = new Swiper(".topStyleSwiper", {
    slidesPerView: 4,
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    allowTouchMove: true,

    freeMode: false,

    autoplay: {
        // delay: 1,
        // disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        }
    }
});




// Set your sale end date (YYYY, MM-1, DD, HH, MM)
const endDate = new Date(2026, 0, 10, 23, 59).getTime();

function updateCounter() {
    const now = new Date().getTime();
    const gap = endDate - now;

    if (gap <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        return;
    }

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((gap / (1000 * 60)) % 60);

    document.getElementById("days").innerText = String(days).padStart(2, "0");
    document.getElementById("hours").innerText = String(hours).padStart(2, "0");
    document.getElementById("minutes").innerText = String(minutes).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 60000); // update every minute



const forEverySwiper = new Swiper(".forEverySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    speed: 600,
    grabCursor: true,


    // autoplay: {
    //     // delay: 1,
    //     // disableOnInteraction: false,
    // },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1.2 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
    },
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



