// ################# Toogle Menu #################
const menuBtn = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar-collapsed');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const menu = document.querySelector('.nav-menu');

menu.addEventListener('click', function () {
    this.classList.toggle('active');
});



// ################# Usp-bar Section #################
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



// ################# Product Category section ################# 
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



// ################# Top Style Section #################
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




// ################# Sale Section #################
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



// ################# For Every You Section #################
const forEverySwiper = new Swiper(".forEverySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    speed: 600,
    grabCursor: true,


    autoplay: {
        // delay: 1,
        // disableOnInteraction: false,
    },

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



// ################# Brand Logo Section #################
const brandSlider = new Swiper('.brand-slider', {
    loop: true,
    slidesPerView: 8,
    spaceBetween: 15,

    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

    speed: 3000,
    grabCursor: true,

    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 6,
        },
        1200: {
            slidesPerView: 8,
        }
    }
});


// ################# Review Section #################
const reviewSwiper = new Swiper(".reviewSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        // delay: 3000,
        // disableOnInteraction: false,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});








