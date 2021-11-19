export default function SlideModule() {

    document.querySelectorAll('.swiper-custom').forEach(el => {
        const slider = el.querySelector('.swiper');
        const pagination = el.querySelector('.swiper-pagination');
        const prevBtn = el.querySelector('.swiper-button-prev');
        const nextBtn = el.querySelector('.swiper-button-next');

        const notslide = el.querySelector('.notslide');

        if (notslide) {
            var notSlide = false;
        } else {
            var notSlide = true;
        }



        try {
            new Swiper(slider, {
                speed: 1200,
                slidesPerView: 'auto',
                autoHeight: false,
                observer: true,
                observeParents: true,
                observeSlideChildren: true,
                // autoplay: {
                //     delay: 4000,
                // },

                pagination: {
                    el: pagination,
                    clickable: true,
                },

                allowTouchMove: notSlide,

                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
                loop: true,
            });
        } catch (err) {
            console.log(err);
        }
    })


    if (document.querySelector('.swiper-cata')) {
        const swiper = document.querySelector('.swiper-cata');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 0,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('.swiper-type')) {
        const swiper = document.querySelector('.swiper-type');
        const sliderContainer = swiper.querySelector('.swiper');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1200,
                loop: true,
                slidesPerView: 'auto',
                autoHeight: true,
                // mousewheel: true,
                // allowTouchMove: false,
                autoplay: {
                    delay: 4000,
                },

                pagination: {
                    el: SliderPagination,
                    clickable: true,
                },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                // breakpoints: {
                //     320: {
                     
                //         allowTouchMove: false,
                //     },

                //     768: {
                //         allowTouchMove: false,
                //     }
                // }
            })
        }
        catch (err) {
            console.log(err)
        }
    }


}