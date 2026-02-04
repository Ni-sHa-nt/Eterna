// ################# Toogle Menu #################
// const menuBtn = document.querySelector('.nav-menu');
// const navbar = document.querySelector('.navbar-collapsed');

// menuBtn.addEventListener('click', () => {
//     navbar.classList.toggle('active');

//     // for no scroll when hamburger menu open
//     document.body.classList.toggle('menu-open');
// });


// const menu = document.querySelector('.nav-menu');

// menu.addEventListener('click', function () {
//     this.classList.toggle('active');
// });

const menuBtn = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar-collapsed');

if (menuBtn && navbar) {
    menuBtn.addEventListener('click', function () {
        navbar.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        this.classList.toggle('active');
    });
}



// Hide header section when scroll
// let lastScrollTop = 0;
// const header = document.querySelector('.header-sec');

// window.addEventListener('scroll', () => {
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > lastScrollTop) {
//         // scrolling down → hide header
//         header.classList.add('hide');
//     } else {
//         // scrolling up → show header
//         header.classList.remove('hide');
//     }

//     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
// });


// let lastScrollTop = 0;
// const header = document.querySelector('.header-sec');

// window.addEventListener('scroll', () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     // 🔝 FULL visible only at top
//     if (scrollTop === 0) {
//         header.classList.remove('hide');
//     }
//     // ⬇️ Hide when scrolling down OR up (but not at top)
//     else {
//         header.classList.add('hide');
//     }

//     lastScrollTop = scrollTop;
// });



const header = document.querySelector('.header-sec');
const HIDE_AFTER = 150; // px

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop >= HIDE_AFTER) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }
});



















// const collectionSwiper = new Swiper(".collectionSwiper", {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     speed: 700,
//     loop: true,
//     centeredSlides: false,
//     slideToClickedSlide: true,

//     // autoplay: {
//     //     // delay: 3000,
//     //     // disableOnInteraction: false,
//     // },

//     // breakpoints: {
//     //     0: {
//     //         slidesPerView: 1,
//     //         allowTouchMove: true,
//     //     },
//     //     768: {
//     //         slidesPerView: "auto",
//     //         allowTouchMove: true,
//     //     },
//     //     1200: {
//     //         slidesPerView: "auto",
//     //         allowTouchMove: false,
//     //     }
//     // }
// });


// Collection Section
// const collectionSwiper = new Swiper(".collectionSwiper", {
//     slidesPerView: "auto",
//     spaceBetween: 30,
//     loop: false,
//     slideToClickedSlide: true,
//     speed: 700,

//     // autoplay: {
//     //     // delay: 1,
//     //     // disableOnInteraction: false,
//     // },

//     // breakpoints: {
//     //     0: {
//     //         slidesPerView: 1,
//     //         allowTouchMove: true,
//     //     },
//     //     768: {
//     //         slidesPerView: 'auto',
//     //         allowTouchMove: true,
//     //     },
//     //     1200: {
//     //         slidesPerView: "auto",
//     //         allowTouchMove: false,
//     //     }
//     // }

// });
// collectionSwiper.on('reachEnd', () => {
//     setTimeout(() => {
//         collectionSwiper.slideTo(0, 0); // instant jump
//     }, 300);
// });





// ################# Loader Section #################
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".luxury-loader").style.display = "none";
    }, 2000);
});


// ################# Custom Cursor #################
const ring = document.querySelector('.cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';

});

function animate() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animate);
}
animate();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.classList.add('hide');
  });

  el.addEventListener('mouseleave', () => {
    ring.classList.remove('hide');
  });
});



// ################# AOS #################
// AOS.init({
//     duration: 1200,        // smooth timing
//     easing: 'ease-out-cubic',
//     once: false,          // re-animate on scroll up/down
//     mirror: true,         // animate when scrolling back
//     // offset: 120,          // trigger point
//     offset: 80,          // trigger point
//     delay: 0,
//     anchorPlacement: 'top-bottom',
//     disableMutationObserver: true
// });

// When loder loade then AOS implement
window.addEventListener("load", () => {

    // STEP 1: Disable scroll while loader is active
    document.body.style.overflow = "hidden";

    setTimeout(() => {

        // STEP 2: Hide loader
        const loader = document.querySelector(".luxury-loader");
        if (loader) loader.style.display = "none";

        // STEP 3: Enable scroll
        document.body.style.overflow = "";

        // STEP 4: Init AOS AFTER loader
        AOS.init({
            duration: 1200,
            easing: "ease-out-cubic",
            once: false,
            mirror: true,
            offset: 120,
            anchorPlacement: "top-bottom",
            disableMutationObserver: true
        });

        // STEP 5: Force recalculation
        AOS.refreshHard();

    }, 2000); // loader time
});
