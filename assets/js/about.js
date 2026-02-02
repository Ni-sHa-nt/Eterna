// ################# About Us Counter #################
const counters = document.querySelectorAll('.counter');
let counterStarted = false;

const startCounter = () => {
    if (counterStarted) return;
    counterStarted = true;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const symbol = counter.innerText.includes('%') ? '%' : '+';
        let count = 0;
        const speed = 100;

        const updateCounter = () => {
            const increment = Math.ceil(target / speed);

            if (count < target) {
                count += increment;
                counter.innerText = count + symbol;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target + symbol;
            }
        };

        updateCounter();
    });
};

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounter();
            }
        });
    },
    {
        threshold: 0.4 // 40% visible
    }
);

observer.observe(document.querySelector('.counter-sec'));




// ################# Glittering Jewelry Section #################
const glitteringSwiper = new Swiper('.glittering-right', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,


    autoplay: {
        // delay: 3000,
        // disableOnInteraction: false,
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
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 1.2,
        }
    }
});




// ################# Video Section #################
Fancybox.bind("[data-fancybox]", {
    animated: true,
    dragToClose: true,
    showClass: "fancybox-zoomIn",
    hideClass: "fancybox-zoomOut",
});


// ################# Our Team Section #################
const teamSwiper = new Swiper(".team-swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        // delay: 0,
        // disableOnInteraction: false,
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
        },
        1200: {
            slidesPerView: 4,
        }
    }
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


// ################# Stories Section #################
const storiesSwiper = new Swiper(".storiesSwiper", {
    slidesPerView: 6.5,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,


    autoplay: {
        // delay: 0,            
        // disableOnInteraction: false,
    },

    freeMode: false,

    breakpoints: {
        0: {
            slidesPerView: 4.5,
            spaceBetween: 5,
        },
        576: {
            slidesPerView: 5.5,
        },
        992: {
            slidesPerView: 6.5,
        }
    }
});



